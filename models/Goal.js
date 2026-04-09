import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    duration: { type: Number, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    progress: { type: Number, default: 0 },
    isPublic: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Goal', goalSchema);
