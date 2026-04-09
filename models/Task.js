import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    goalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal', required: true },
    day: { type: Number, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    orderIndex: { type: Number, default: 0 },
    notes: { type: String, default: "" },
    resources: [{
        title: String,
        url: String,
        type: { type: String, enum: ['video', 'article', 'other'] },
        description: String
    }]
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
