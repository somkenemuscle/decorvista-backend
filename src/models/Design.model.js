import mongoose from 'mongoose';

const DesignSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Furniture', 'Lighting', 'Decor', 'Rugs and Carpets', 'Wall Art', 'Curtains and Blinds'], // Allowed values
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Design = mongoose.model('Design', DesignSchema);

