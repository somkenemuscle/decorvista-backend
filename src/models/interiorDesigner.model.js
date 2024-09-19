import mongoose from 'mongoose';
const { Schema } = mongoose;

// User Schema
const interiorDesignerSchema = new Schema({
    role: {
        default: 'Designer',
        type: String,
    },
    fullname: {
        type: String,
        required: [true, 'Username is required'],

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
    yearsOfExpereience: {
        type: Number,
        required: [true, 'years of experience is required'],
    },
    portfolio: {
        type: String,
    }

});

export const interiorDesigner = mongoose.model('InteriorDesigner', interiorDesignerSchema);
