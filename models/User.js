import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Stored in plain text intentionally for this prototype
    totalFocusTime: { type: Number, default: 0 },
    currentStreak: { type: Number, default: 0 },
    lastActiveDate: { type: Date }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
