JOINING HANDS AI COMPUTER LAB — V1.4 PRODUCTION-READY PACKAGE

This version is prepared for online deployment on Render.

WHAT'S NEW
- SQLite database is stored under DATA_DIR so it can be placed on persistent storage.
- Express binds to 0.0.0.0 for public hosting.
- /api/health is available for health checks.
- render.yaml is included with the deployment configuration.
- Existing student, teacher, admin, learning, AI Teacher, attendance, progress,
  certificates and profile features remain.

RECOMMENDED DEPLOYMENT
Render Web Service + Persistent Disk.

Why a disk? This version uses SQLite. Render says its default filesystem is
ephemeral, so SQLite data would otherwise be lost on deploy/restart. A persistent
disk preserves the database. A persistent disk also means the service cannot be
scaled to multiple instances and does not use zero-downtime deploys.

DEPLOY
1. Create a GitHub repository and upload this folder.
2. In Render, choose New -> Web Service and connect the repository.
3. Render can read render.yaml, or you can enter:
   Build: npm install
   Start: npm start
   Health check: /api/health
4. Keep DATA_DIR=/var/data.
5. Add OPENAI_API_KEY in Render Environment if you want live AI Teacher.
6. Deploy.
7. Open the generated *.onrender.com URL in Android Chrome.

DEMO
Student: JH2026-001 / 1234
Teacher: JH-T-001 / teacher123
Admin: JH-A-001 / admin123

IMPORTANT PRODUCTION SECURITY WORK STILL RECOMMENDED
- Replace demo passwords before real student use.
- Use a proper password hashing algorithm such as Argon2/bcrypt.
- Add password reset and account lockout.
- Add HTTPS-only secure cookies/session management.
- Add audit logs and database backups.
- For larger scale/multiple instances, migrate SQLite to PostgreSQL.

The app is deployment-ready, but I cannot create the live Render service from this
chat because that requires access to your hosting/GitHub account.
