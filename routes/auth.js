import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ error: 'Username and required' });

        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ error: 'Username already taken' });

        const user = new User({ username, password });
        await user.save();

        res.status(201).json({ userId: user._id, username: user.username });
    } catch (error) {
        res.status(500).json({ error: 'Server error during signup' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });

        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        res.json({ userId: user._id, username: user.username });
    } catch (error) {
        res.status(500).json({ error: 'Server error during login' });
    }
});

export default router;
