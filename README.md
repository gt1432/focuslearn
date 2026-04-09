# FocusLearn

FocusLearn is an AI-powered full-stack learning platform that converts user learning goals into structured, step-by-step daily roadmaps. Built with a responsive Vanilla HTML/CSS/JS frontend and a Node.js/Express backend on top of MongoDB.

## Features
- **Smart Roadmap Generation:** Input a goal and duration to receive a daily task list.
- **Dashboard:** Track daily responsibilities, view active task progress, and see resource links (YouTube, Articles).
- **Focus Mode:** Distraction-free Pomodoro timer interface for tackling a specific study task.
- **Gamification & Mentor:** Earn XP and badges for completing tasks, and ask questions to your simulated AI Mentor.

## Local Setup

1. **Prerequisites**: Node.js and MongoDB installed locally (or an Atlas connection string).
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Environment setup**: Create a `.env` file containing:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/focuslearn
   ```
4. **Run Server**:
   ```bash
   npm run dev
   ```
   (Or `npm start` for production)
5. **Open app**: Go to `http://localhost:3000`

## Deployment Instructions

### 1. Push Code to GitHub
1. Initialize a git repository in exactly this local folder (`websprint`).
2. Add all files: `git add .`
3. Commit changes: `git commit -m "Initial commit"`
4. Create a repository on GitHub, link it, and push: `git push -u origin main`

### 2. Configure MongoDB Atlas
1. Sign up/Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a Free Cluster.
3. Under Database Access, create a database user and password.
4. Under Network Access, allow access from anywhere (`0.0.0.0/0`).
5. Click **Connect** on your cluster, select **Drivers**, and copy the connection string. Replace `<password>` with your user password. Keep this string handy.

### 3. Deploy Backend & Frontend on Render
Render natively supports Node.js apps and we are serving the frontend statically right from the Express server.
1. Sign up on [Render.com](https://render.com) and click **New+** -> **Web Service**.
2. Connect your GitHub repository.
3. Select Node as the Environment.
4. Configure Build Command: `npm install`
5. Configure Start Command: `npm start`
6. Scroll down to **Environment Variables** and add:
   - `MONGODB_URI` = `[your Atlas Connection String from above]`
   - `NODE_ENV` = `production`
7. Click **Create Web Service**. 

Once the service is deployed, you will get a live `.onrender.com` URL. Your entire stack is perfectly served from there!
