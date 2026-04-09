import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    description: { type: String },
    link: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
