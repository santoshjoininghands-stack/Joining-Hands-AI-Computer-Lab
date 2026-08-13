import express from "express";
import OpenAI from "openai";
import Database from "better-sqlite3";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

dotenv.config();
const app=express(),__filename=fileURLToPath(import.meta.url),__dirname=path.dirname(__filename);
const db=new Database(path.join(__dirname,"joining_hands.db"));db.pragma("journal_mode=WAL");
db.exec(`
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,user_code TEXT UNIQUE,name TEXT,role TEXT,batch TEXT,password_hash TEXT,phone TEXT,email TEXT,join_date TEXT);
CREATE TABLE IF NOT EXISTS lesson_attempts(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,lesson_id TEXT,score INTEGER,passed INTEGER,attempt_no INTEGER,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS certificates(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,course_id TEXT,certificate_no TEXT,issued_at TEXT DEFAULT CURRENT_TIMESTAMP,UNIQUE(user_id,course_id));
CREATE TABLE IF NOT EXISTS attendance(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,date TEXT,status TEXT,marked_by INTEGER,UNIQUE(user_id,date));
`);
function hash(s){return Buffer.from(String(s)).toString("base64")}
if(!db.prepare("SELECT COUNT(*) c FROM users").get().c){
 const i=db.prepare("INSERT INTO users(user_code,name,role,batch,password_hash,join_date) VALUES(?,?,?,?,?,?)");
 const today=new Date().toISOString().slice(0,10);
 i.run("JH2026-001","Rahul Kumar","student","Batch A",hash("1234"),today);
 i.run("JH-T-001","Joining Hands Teacher","teacher","",hash("teacher123"),today);
 i.run("JH-A-001","Joining Hands Admin","admin","",hash("admin123"),today);
}
const curriculum=JSON.parse(fs.readFileSync(path.join(__dirname,"curriculum.json"),"utf8"));
const ai=process.env.OPENAI_API_KEY?new OpenAI({apiKey:process.env.OPENAI_API_KEY}):null,sessions=new Map();
const lessons=()=>curriculum.courses.flatMap(c=>c.lessons.map(l=>({...l,courseId:c.id,courseTitle:c.title})));
app.use(express.json({limit:"2mb"}));app.use(express.static(path.join(__dirname,"public")));
function auth(req,res,next){const t=req.headers.authorization?.replace("Bearer ",""),u=sessions.get(t);if(!u)return res.status(401).json({error:"Please login"});req.user=u;next()}
function role(...r){return(req,res,next)=>r.includes(req.user.role)?next():res.status(403).json({error:"Access denied"})}

app.post("/api/login",(req,res)=>{
 const u=db.prepare("SELECT id,user_code,name,role,batch,password_hash,phone,email,join_date FROM users WHERE user_code=?").get(String(req.body.code||""));
 if(!u||u.password_hash!==hash(req.body.password||""))return res.status(401).json({error:"Invalid login"});
 delete u.password_hash;const t=Math.random().toString(36).slice(2)+Date.now();sessions.set(t,u);res.json({token:t,user:u});
});
app.get("/api/me",auth,(req,res)=>res.json(req.user));
app.put("/api/me",auth,(req,res)=>{
 const name=String(req.body.name||req.user.name).trim(),phone=String(req.body.phone||"").trim(),email=String(req.body.email||"").trim();
 db.prepare("UPDATE users SET name=?,phone=?,email=? WHERE id=?").run(name,phone,email,req.user.id);
 req.user.name=name;req.user.phone=phone;req.user.email=email;res.json(req.user);
});
app.get("/api/curriculum",auth,(req,res)=>res.json(curriculum));
app.get("/api/progress",auth,(req,res)=>res.json(db.prepare("SELECT lesson_id,MAX(score) best_score,MAX(passed) passed,COUNT(*) attempts FROM lesson_attempts WHERE user_id=? GROUP BY lesson_id").all(req.user.id)));
app.post("/api/lesson-attempt",auth,(req,res)=>{
 const lid=String(req.body.lessonId),score=Math.max(0,Math.min(100,Number(req.body.score||0))),l=lessons().find(x=>x.id===lid);
 if(!l)return res.status(404).json({error:"Lesson not found"});
 const old=db.prepare("SELECT COUNT(*) c FROM lesson_attempts WHERE user_id=? AND lesson_id=?").get(req.user.id,lid).c;
 db.prepare("INSERT INTO lesson_attempts(user_id,lesson_id,score,passed,attempt_no) VALUES(?,?,?,?,?)").run(req.user.id,lid,score,score>=70?1:0,old+1);
 res.json({score,passed:score>=70,attempts:old+1});
});
function courseStatus(uid,c){
 const rows=db.prepare("SELECT lesson_id,MAX(score) score,MAX(passed) passed FROM lesson_attempts WHERE user_id=? GROUP BY lesson_id").all(uid),m=new Map(rows.map(x=>[x.lesson_id,x]));
 const completed=c.lessons.filter(l=>m.get(l.id)?.passed).length;
 const avg=c.lessons.length?Math.round(c.lessons.reduce((s,l)=>s+(m.get(l.id)?.score||0),0)/c.lessons.length):0;
 return {completed,total:c.lessons.length,average:avg,complete:completed===c.lessons.length};
}
app.get("/api/course-status",auth,(req,res)=>res.json(curriculum.courses.map(c=>({id:c.id,title:c.title,...courseStatus(req.user.id,c)}))));
app.get("/api/certificates",auth,(req,res)=>res.json(db.prepare("SELECT certificate_no,course_id,issued_at FROM certificates WHERE user_id=? ORDER BY id DESC").all(req.user.id)));
app.post("/api/certificate/:courseId",auth,(req,res)=>{
 const c=curriculum.courses.find(x=>x.id===req.params.courseId);if(!c)return res.status(404).json({error:"Course not found"});
 const st=courseStatus(req.user.id,c);if(!st.complete)return res.status(400).json({error:`Complete all ${st.total} lessons first`});
 let x=db.prepare("SELECT * FROM certificates WHERE user_id=? AND course_id=?").get(req.user.id,c.id);
 if(!x){const no=`JH-${new Date().getFullYear()}-${String(Date.now()).slice(-7)}`;db.prepare("INSERT INTO certificates(user_id,course_id,certificate_no) VALUES(?,?,?)").run(req.user.id,c.id,no);x=db.prepare("SELECT * FROM certificates WHERE user_id=? AND course_id=?").get(req.user.id,c.id)}
 res.json(x);
});
app.get("/api/attendance",auth,(req,res)=>{
 const rows=db.prepare("SELECT date,status FROM attendance WHERE user_id=? ORDER BY date DESC").all(req.user.id);
 const present=rows.filter(x=>x.status==="present").length,absent=rows.filter(x=>x.status==="absent").length,total=rows.length;
 res.json({rows,present,absent,total,percentage:total?Math.round(present/total*100):0});
});
app.post("/api/attendance",auth,role("teacher","admin"),(req,res)=>{
 const uid=Number(req.body.userId),date=String(req.body.date),status=req.body.status==="present"?"present":"absent";
 db.prepare(`INSERT INTO attendance(user_id,date,status,marked_by) VALUES(?,?,?,?)
 ON CONFLICT(user_id,date) DO UPDATE SET status=excluded.status,marked_by=excluded.marked_by`).run(uid,date,status,req.user.id);
 res.json({ok:true});
});
app.get("/api/students",auth,role("teacher","admin"),(req,res)=>res.json(db.prepare("SELECT id,user_code,name,batch,phone,email,join_date FROM users WHERE role='student' ORDER BY name").all()));
app.post("/api/students",auth,role("admin"),(req,res)=>{
 const code=String(req.body.user_code||"").trim(),name=String(req.body.name||"").trim(),password=String(req.body.password||"1234");
 if(!code||!name)return res.status(400).json({error:"Student ID and name are required"});
 try{const r=db.prepare("INSERT INTO users(user_code,name,role,batch,password_hash,phone,email,join_date) VALUES(?,?,?,?,?,?,?,?)").run(code,name,"student",String(req.body.batch||""),hash(password),String(req.body.phone||""),String(req.body.email||""),new Date().toISOString().slice(0,10));res.json({id:r.lastInsertRowid})}
 catch(e){res.status(400).json({error:"Student ID already exists"})}
});
app.get("/api/teacher-summary",auth,role("teacher","admin"),(req,res)=>{
 const students=db.prepare("SELECT id,user_code,name,batch FROM users WHERE role='student' ORDER BY name").all();
 res.json(students.map(s=>({student:s,courses:curriculum.courses.map(c=>({id:c.id,title:c.title,...courseStatus(s.id,c)})),attendance:(()=>{const r=db.prepare("SELECT status FROM attendance WHERE user_id=?").all(s.id),p=r.filter(x=>x.status==="present").length;return {present:p,total:r.length,percentage:r.length?Math.round(p/r.length*100):0}})()})));
});
app.post("/api/ai",auth,async(req,res)=>{
 try{const q=String(req.body.question||"").trim(),lid=String(req.body.lessonId||"");const l=lessons().find(x=>x.id===lid);
 if(!ai)return res.json({answer:"AI Teacher is not activated. Add OPENAI_API_KEY to .env."});
 const p=db.prepare("SELECT lesson_id,MAX(score) score,COUNT(*) attempts FROM lesson_attempts WHERE user_id=? GROUP BY lesson_id").all(req.user.id);
 const r=await ai.responses.create({model:"gpt-5",input:`You are the Joining Hands AI Computer Teacher. Teach only from this curriculum: ${JSON.stringify(curriculum)}. Current lesson: ${JSON.stringify(l||{})}. Student progress: ${JSON.stringify(p)}. Question: ${q}. Use simple English or Hindi/Hinglish, step by step.`});
 res.json({answer:r.output_text});
 }catch(e){res.status(500).json({error:"AI request failed"})}
});
app.get("/api/health",(req,res)=>res.json({ok:true,version:"1.3.0"}));
const port=process.env.PORT||3000;
app.listen(port,"0.0.0.0",()=>console.log(`Joining Hands AI Lab running on ${port}`));
