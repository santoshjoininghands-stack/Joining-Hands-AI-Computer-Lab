let curriculum={courses:[]};
let currentCourse=null;

async function loadCurriculum(){
  try{
    const r=await fetch('/curriculum.json',{cache:'no-store'});
    if(!r.ok) throw new Error('curriculum.json not found');
    curriculum=await r.json();
    renderCourses();
  }catch(e){
    document.getElementById('courseGrid').innerHTML=
      '<div class="card"><h3>Unable to load curriculum</h3><p class="muted">Please make sure curriculum.json is inside the public folder.</p></div>';
  }
}

function renderCourses(){
  const grid=document.getElementById('courseGrid');
  grid.innerHTML=curriculum.courses.map(c=>`
    <article class="course-card" onclick="openCourse('${c.id}')">
      <div class="course-icon">${c.icon||'📚'}</div>
      <h3>${esc(c.title)}</h3>
      <p class="muted">${esc(c.description||'Learn and practice through projects.')}</p>
      <span class="badge">${c.lessons.length} lessons</span>
    </article>`).join('');
}
function openCourse(id){
  currentCourse=curriculum.courses.find(c=>c.id===id);
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('lessonView').classList.add('hidden');
  document.getElementById('courseView').classList.remove('hidden');
  document.getElementById('courseHeader').innerHTML=`<h1>${esc(currentCourse.icon||'📚')} ${esc(currentCourse.title)}</h1><p class="muted">${esc(currentCourse.description||'')}</p>`;
  document.getElementById('lessonGrid').innerHTML=currentCourse.lessons.map((l,i)=>`
    <article class="lesson-card" onclick="openLesson(${i})">
      <div><h3>Lesson ${i+1}: ${esc(l.title)}</h3><p class="muted">${esc(l.short||'Learn the concept and complete a practical task.')}</p></div>
      <span class="badge">Open →</span>
    </article>`).join('');
}
function openLesson(i){
  const l=currentCourse.lessons[i];
  document.getElementById('courseView').classList.add('hidden');
  document.getElementById('lessonView').classList.remove('hidden');
  const image=l.image?`<img class="project-image" src="${esc(l.image)}" alt="${esc(l.title)}">`:'';
  const steps=(l.steps||[]).map((s,n)=>`<li><b>Step ${n+1}:</b> ${esc(s)}</li>`).join('');
  const concepts=(l.concepts||[]).map(x=>`<li>${esc(x)}</li>`).join('');
  const tasks=(l.practice||[]).map((t,n)=>`
    <div class="task">
      <b>Practice ${n+1}</b><p>${esc(t.question)}</p>
      ${t.answer?`<button class="check" onclick="this.nextElementSibling.classList.remove('hidden')">Show answer</button><p class="success hidden">${esc(t.answer)}</p>`:''}
    </div>`).join('');
  document.getElementById('lessonContent').innerHTML=`
    <h1>Lesson ${i+1}: ${esc(l.title)}</h1>
    <p class="muted">${esc(l.duration||'Practical lesson')}</p>
    ${image}
    <div class="card"><h2>What you will learn</h2><ul>${concepts}</ul></div>
    <div class="card"><h2>How to make it</h2><ol class="steps">${steps}</ol></div>
    ${l.formula?`<div class="card"><h2>Formula / Important command</h2><div class="formula">${esc(l.formula)}</div></div>`:''}
    <div class="card"><h2>Practice</h2><p>${esc(l.practiceIntro||'Now do the task yourself in MS Word/Excel/PowerPoint.')}</p>${tasks}</div>
    <div class="tip"><b>Tip:</b> Do the task yourself first. Use “Show answer” only when you are stuck.</div>`;
}
function showHome(){document.getElementById('courseView').classList.add('hidden');document.getElementById('lessonView').classList.add('hidden');document.getElementById('homeView').classList.remove('hidden')}
function backToCourse(){document.getElementById('lessonView').classList.add('hidden');document.getElementById('courseView').classList.remove('hidden')}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
loadCurriculum();