import mongoose from 'mongoose';
const { Schema } = mongoose;

// User Schema
const homeOwnerSchema = new Schema({
    role: {
        type: String,
        default: 'home-owner',
    },
    fullname: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'User already exists'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    cart: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product', // Refers to the Product schema
        },
    ]
});

export const homeOwner = mongoose.model('homeOwner', homeOwnerSchema);

