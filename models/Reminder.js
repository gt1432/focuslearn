import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ['missed_task', 'inactivity'], required: true },
    status: { type: String, enum: ['unread', 'read'], default: 'unread' },
}, { timestamps: true });

export default mongoose.model('Reminder', reminderSchema);
