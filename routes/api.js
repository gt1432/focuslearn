import express from 'express';
import Goal from '../models/Goal.js';
import Task from '../models/Task.js';
import Chat from '../models/Chat.js';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Reminder from '../models/Reminder.js';
import { predefinedRoadmaps } from '../utils/courseData.js';

const router = express.Router();

// ----------------- GOALS -----------------
router.post('/goal', async (req, res) => {
    try {
        const { title, duration, userId } = req.body;
        if (!title || !duration || !userId) {
            return res.status(400).json({ error: 'Title, duration and userId are required' });
        }

        const goal = new Goal({ title, duration, userId });
        await goal.save();

        if (predefinedRoadmaps[title]) {
            // Use exact predefined tracks!
            const track = predefinedRoadmaps[title];
            for (const item of track) {
                const task = new Task({
                    goalId: goal._id,
                    day: item.day,
                    title: item.title,
                    resources: [
                        {
                            title: `Video Lesson: ${item.title}`,
                            url: item.url,
                            type: 'video',
                            description: `This specific video was curated to teach you ${item.title}.`
                        }
                    ],
                    quiz: item.quiz // Inject the interrelated quiz!
                });
                await task.save();
                generatedTasks.push(task._id);
            }
        } else {
            // Smart AI Mock: Generate tasks with generic descriptions and quizzes
            for (let i = 1; i <= duration; i++) {
                const task = new Task({
                    goalId: goal._id,
                    day: i,
                    title: `Master ${title} - Part ${i}`,
                    resources: [
                        { 
                            title: `YouTube Intro to ${title}`, 
                            url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(`Intro to ${title} part ${i}`), 
                            type: 'video',
                            description: `This video visually breaks down the core concepts of part ${i}.`
                        }
                    ],
                    quiz: {
                        question: `What is a core concept of ${title} part ${i}?`,
                        options: ["Concept A", "Concept B", "The Fundamentals", "Advanced Logic"],
                        correctAnswer: 2
                    }
                });
                await task.save();
                generatedTasks.push(task._id);
            }
        }

        goal.tasks = generatedTasks;
        await goal.save();

        res.status(201).json(goal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create goal' });
    }
});

router.get('/goal/:id', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id).populate('tasks');
        if (!goal) return res.status(404).json({ error: 'Goal not found' });
        res.json(goal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goal' });
    }
});

// Fetch all goals for a user
router.get('/goals', async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) return res.status(400).json({ error: 'userId is required' });
        const goals = await Goal.find({ userId }).populate('tasks').sort({ createdAt: -1 });
        res.json(goals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goals' });
    }
});

// ----------------- TASKS -----------------
router.put('/task/:id', async (req, res) => {
    try {
        const { completed } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { completed }, { new: true });
        
        // Update Goal progress
        const goal = await Goal.findById(task.goalId).populate('tasks');
        const completedTasks = goal.tasks.filter(t => t.completed).length;
        const progress = Math.round((completedTasks / goal.tasks.length) * 100);
        goal.progress = progress;
        await goal.save();

        res.json({ task, progress });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});

// ----------------- CHAT -----------------
router.post('/chat', async (req, res) => {
    try {
        const { userId, message } = req.body;
        
        // Save user message
        const userMsg = new Chat({ userId, message, sender: 'user' });
        await userMsg.save();

        // Smart Keyword Engine Logic
        const text = message.toLowerCase();
        let aiReply = "I'm here to help you study! Could you clarify what you're struggling with? (Try asking me about HTML, CSS, JavaScript, Python, UI/UX, or if you feel unmotivated).";

        if (text.includes('html')) {
            aiReply = "HTML (HyperText Markup Language) is the standard markup language for creating web pages. Think of it as the skeleton of your website. It uses tags like `<h1>` and `<p>` to structure content!";
        } else if (text.includes('css')) {
            aiReply = "CSS (Cascading Style Sheets) is what makes your website look beautiful. It paints the HTML skeleton, allowing you to add colors, animations, responsive flexbox layouts, and typography.";
        } else if (text.includes('javascript') || text.includes('js')) {
            aiReply = "JavaScript is arguably the most important language for the web! While HTML structures and CSS styles, JS adds logic and interactivity (like handling mouse clicks, fetching data, and running animations).";
        } else if (text.includes('python')) {
            aiReply = "Python is an immensely powerful, readable language perfect for Data Science, Backend Engineering, and AI. Its syntax is very clean, making it a great starting language!";
        } else if (text.includes('react')) {
            aiReply = "React is a popular frontend library built by Facebook. It allows you to build single-page applications by breaking your UI into reusable 'Components'.";
        } else if (text.includes('ux') || text.includes('ui') || text.includes('design')) {
            aiReply = "UI (User Interface) focuses on the visual look of an app, while UX (User Experience) focuses on how intuitive and efficient the app feels to use. Both are essential for modern software!";
        } else if (text.includes('stuck') || text.includes('help') || text.includes('error')) {
            aiReply = "Getting stuck is completely normal! Try this: 1. Read the error message carefully. 2. Google the exact error. 3. Take a 5-minute break. You've got this!";
        } else if (text.includes('motivation') || text.includes('unmotivated') || text.includes('tired')) {
            aiReply = "Learning is a marathon, not a sprint. Remember why you started! Take a deep breath, use Focus Mode for just 10 minutes, and see if you get into the flow.";
        } else if (text.includes('hello') || text.includes('hi ')) {
            aiReply = "Hello! I am your FocusLearn AI Mentor. What subject are we mastering today?";
        }

        const reply = new Chat({ userId, message: aiReply, sender: 'mentor' });
        await reply.save();

        // Return latest messages
        const messages = await Chat.find({ userId }).sort({ createdAt: 1 }).limit(50);
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send chat' });
    }
});

router.get('/chat', async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) return res.status(400).json({ error: 'userId is required' });
        const messages = await Chat.find({ userId }).sort({ createdAt: 1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch chats' });
    }
});

// Fetch public goal
router.get('/goal/public/:id', async (req, res) => {
    try {
        const goal = await Goal.findOne({ _id: req.params.id, isPublic: true }).populate('tasks');
        if (!goal) return res.status(404).json({ error: 'Goal not found or private' });
        res.json(goal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to public fetch' });
    }
});

// Toggle Share
router.put('/goal/:id/share', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        goal.isPublic = !goal.isPublic;
        await goal.save();
        res.json(goal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to share goal' });
    }
});

// Update Task Notes
router.put('/task/:id/notes', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { notes: req.body.notes }, { new: true });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update notes' });
    }
});

// Reorder tasks
router.put('/task/reorder', async (req, res) => {
    try {
        const { orderMap } = req.body; // { taskId: newOrderIndex }
        for (const [id, orderIndex] of Object.entries(orderMap)) {
            await Task.findByIdAndUpdate(id, { orderIndex });
        }
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to reorder' });
    }
});

// Sync User stats (Focus Time & Streak)
router.post('/user/sync', async (req, res) => {
    try {
        const { userId, addFocusTime } = req.body;
        const user = await User.findById(userId);
        if(!user) return res.status(404).json({ error: "User not found" });

        if (addFocusTime) user.totalFocusTime += addFocusTime;

        // Simple streak calculation
        const today = new Date();
        today.setHours(0,0,0,0);
        const lastActive = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
        if(lastActive) lastActive.setHours(0,0,0,0);

        if (!lastActive) {
            user.currentStreak = 1;
        } else {
            const diffTime = Math.abs(today - lastActive);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                user.currentStreak += 1;
            } else if (diffDays > 1) {
                user.currentStreak = 1; // broken streak
            }
        }
        
        user.lastActiveDate = new Date();
        await user.save();
        res.json({ currentStreak: user.currentStreak, totalFocusTime: user.totalFocusTime });
    } catch (error) {
        res.status(500).json({ error: 'Failed to sync user' });
    }
});

// Get User stats
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({ currentStreak: user.currentStreak, totalFocusTime: user.totalFocusTime });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user stats' });
    }
});

// ----------------- PHASE 3: COURSES -----------------
router.get('/courses', async (req, res) => {
    try {
        const query = req.query.category ? { category: { $regex: new RegExp(req.query.category, "i") } } : {};
        const courses = await Course.find(query);
        res.json(courses);
    } catch (e) { res.status(500).json({ error: 'Failed to fetch courses' }); }
});

router.post('/courses/seed', async (req, res) => {
    try {
        await Course.deleteMany({});
        const seedData = [
            { category: 'Web Development', title: 'Web Development Bootcamp', level: 'Beginner', link: 'https://www.youtube.com/watch?v=UB1O30fR-EE', description: 'Learn HTML, CSS, and JavaScript from scratch. Docs: https://developer.mozilla.org/en-US/docs/Learn' },
            { category: 'Web Development', title: 'Full Stack Development', level: 'Intermediate', link: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', description: 'Build full web applications using Node.js. Docs: https://www.theodinproject.com' },
            { category: 'Data Science', title: 'Python Programming Mastery', level: 'Beginner', link: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', description: 'Learn Python fundamentals and coding basics. Docs: https://docs.python.org/3/tutorial/' },
            { category: 'Data Science', title: 'Data Science Fundamentals', level: 'Beginner', link: 'https://www.youtube.com/watch?v=ua-CiDNNj30', description: 'Data analysis, visualization, and projects. Docs: https://www.kaggle.com/learn' },
            { category: 'AI', title: 'Machine Learning Basics', level: 'Intermediate', link: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI', description: 'Learn ML concepts and model building. Docs: https://www.coursera.org/learn/machine-learning' },
            { category: 'UI/UX Design', title: 'UI/UX Design Complete Guide', level: 'Beginner', link: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU', description: 'Learn UI principles, UX flow, and design thinking. Docs: https://www.interaction-design.org' },
            { category: 'Programming', title: 'Java Programming', level: 'Beginner', link: 'https://www.youtube.com/watch?v=GoXwIVyNvX0', description: 'Object-oriented programming with Java. Docs: https://www.w3schools.com/java/' },
            { category: 'Mobile App', title: 'Android App Development', level: 'Intermediate', link: 'https://www.youtube.com/watch?v=fis26HvvDII', description: 'Build mobile apps using Android Studio. Docs: https://developer.android.com/courses' },
            { category: 'Cloud Computing', title: 'Cloud Computing Basics', level: 'Beginner', link: 'https://www.youtube.com/watch?v=2LaAJq1lB1Q', description: 'Learn cloud concepts (AWS, deployment, hosting). Docs: https://aws.amazon.com/training/' },
            { category: 'Cybersecurity', title: 'Cybersecurity Fundamentals', level: 'Beginner', link: 'https://www.youtube.com/watch?v=inWWhr5tnEA', description: 'Basics of ethical hacking and security. Docs: https://www.cybrary.it' }
        ];
        await Course.insertMany(seedData);
        res.json({ message: "Seeded courses successfully!" });
    } catch(e) { res.status(500).json({ error: 'Failed to seed courses' }); }
});

// ----------------- PHASE 3: REMINDERS -----------------
router.post('/reminders/evaluate', async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        // Check inactivity
        const today = new Date();
        const lastActive = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
        if (lastActive) {
            const diffTime = Math.abs(today - lastActive);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays >= 2) {
                // Check if already reminded
                const existing = await Reminder.findOne({ userId, type: 'inactivity', status: 'unread' });
                if (!existing) {
                    await Reminder.create({ userId, type: 'inactivity', message: 'You haven’t studied in 2 days. Continue now!' });
                }
            }
        }

        // Check missed tasks (mock logic: if day 1 is incomplete but it's been > 1 day since goal created)
        const activeGoals = await Goal.find({ userId }).populate('tasks');
        for (const goal of activeGoals) {
            const goalAgeDays = Math.ceil(Math.abs(today - new Date(goal.createdAt)) / (1000 * 60 * 60 * 24));
            const missedTask = goal.tasks.find(t => !t.completed && t.day < goalAgeDays);
            
            if (missedTask) {
                const existing = await Reminder.findOne({ userId, type: 'missed_task', status: 'unread' });
                if (!existing) {
                    await Reminder.create({ userId, type: 'missed_task', message: `⚠️ You missed Day ${missedTask.day}'s task: "${missedTask.title}".` });
                }
            }
        }

        res.json({ success: true });
    } catch(e) { res.status(500).json({ error: 'Failed to evaluate reminders' }); }
});

router.get('/reminders', async (req, res) => {
    try {
        const reminders = await Reminder.find({ userId: req.query.userId, status: 'unread' });
        res.json(reminders);
    } catch(e) { res.status(500).json({ error: 'Failed' }); }
});

router.put('/reminders/:id/read', async (req, res) => {
    try {
        await Reminder.findByIdAndUpdate(req.params.id, { status: 'read' });
        res.json({ success: true });
    } catch(e) { res.status(500).json({ error: 'Failed' }); }
});

// TASK RECOVERY
router.put('/task/:id/skip', async (req, res) => {
    try {
        // Skips by marking as complete, but could be extended to visually show "skipped"
        const task = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
        res.json(task);
    } catch(e) { res.status(500).json({ error: 'Failed to skip task' }); }
});

// Add after POST /tasks/:id/notes or similar
router.post('/tasks/:id/quiz', async (req, res) => {
    try {
        const { answer } = req.body;
        const task = await Task.findById(req.params.id);
        if (!task || !task.quiz) return res.status(404).json({ error: 'Task or Quiz not found' });

        const isCorrect = task.quiz.correctAnswer === parseInt(answer);
        if (isCorrect) {
            task.quiz.completed = true;
            await task.save();
            
            // Reward XP to User
            const goal = await Goal.findById(task.goalId);
            if (goal) {
                const user = await User.findById(goal.userId);
                if (user) {
                    user.totalFocusTime += 5; // Reward with 5 "bonus" points/mins
                    await user.save();
                }
            }
        }

        res.json({ isCorrect, correctAnswer: task.quiz.correctAnswer });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process quiz' });
    }
});

export default router;
