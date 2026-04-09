import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    message: { type: String, required: true },
    sender: { type: String, enum: ['user', 'mentor'], required: true }
}, { timestamps: true });

export default mongoose.model('Chat', chatSchema);
