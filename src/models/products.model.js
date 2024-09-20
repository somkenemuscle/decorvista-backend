import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
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

export const Product = mongoose.model('Product', ProductSchema);

