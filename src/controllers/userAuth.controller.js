import { homeOwner } from '../models/homeOwner.model.js';
import bcrypt from 'bcrypt';
import { generateAccessToken, generateRefreshToken } from '../auth/auth.js';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { refreshSecretKey } from '../auth/config.js';
import { setRefreshToken, setAccessToken, removeAccessToken, removeRefreshToken } from '../utils/authCookies.js';
import { interiorDesigner } from '../models/interiorDesigner.model.js';
import dotenv from 'dotenv';
dotenv.config();

// Sign Up Controller Function
export const signUpHomeOwner = async (req, res) => {
    const { fullname, email, password } = req.body;

    // Check if homeOwner or interiorDesigner already exists
    const existingHomeOwner = await homeOwner.findOne({ email });
    const existingInteriorDesigner = await interiorDesigner.findOne({ email });

    if (existingHomeOwner || existingInteriorDesigner) {
        return res.status(400).json({ message: 'User already exists' });
    }


    // Hash the password before storing in the database (hash and salt)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new homeOwner
    const newHomeOwner = new homeOwner({
        fullname,
        email,
        password: hashedPassword,
    });

    // Save the homeOwner to the database
    await newHomeOwner.save();

    // Generate tokens using the imported function
    const accessToken = generateAccessToken(newHomeOwner);
    const refreshToken = generateRefreshToken(newHomeOwner);

    // Set cookies
    setAccessToken(res, accessToken);
    setRefreshToken(res, refreshToken);

    // Respond with success message
    res.status(201).json({ message: 'homeOwner registered successfully', fullname });
};


// Sign Up Controller Function
export const signUpInteriorDesigner = async (req, res) => {
    const { fullname, email, password, yearsOfExpereience, portfolio } = req.body;

    // Check if homeOwner or interiorDesigner already exists
    const existingHomeOwner = await homeOwner.findOne({ email });
    const existingInteriorDesigner = await interiorDesigner.findOne({ email });

    if (existingHomeOwner || existingInteriorDesigner) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before storing in the database (hash and salt)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new homeOwner
    const newInteriorDesigner = new homeOwner({
        fullname,
        email,
        yearsOfExpereience,
        portfolio,
        password: hashedPassword,
    });

    // Save the homeOwner to the database
    await newInteriorDesigner.save();

    // Generate tokens using the imported function
    const accessToken = generateAccessToken(newInteriorDesigner);
    const refreshToken = generateRefreshToken(newInteriorDesigner);

    // Set cookies
    setAccessToken(res, accessToken);
    setRefreshToken(res, refreshToken);

    // Respond with success message
    res.status(201).json({ message: 'homeOwner registered successfully', fullname });
};









// Sign In Controller Function
export const signInHomeOwner = async (req, res) => {
    // Validate the request body using Joi
    const { error } = signInSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const { fullname, password } = req.body;

    // Check if the homeOwner exists by their fullname
    const existingHomeOwner = await homeOwner.findOne({ fullname });

    if (!existingHomeOwner) {
        return res.status(404).json({ message: 'homeOwner not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, existingHomeOwner.password);

    if (passwordMatch) {
        // Passwords match, generate JWT tokens
        const accessToken = generateAccessToken(existingHomeOwner);
        const refreshToken = generateRefreshToken(existingHomeOwner);

        // Set cookies
        setAccessToken(res, accessToken);
        setRefreshToken(res, refreshToken);

        return res.status(200).json({ message: 'Sign In successful', fullname });
    } else {
        // Passwords don't match
        return res.status(401).json({ message: 'Invalid fullname or password', code: 'INVALID_FULLNAME_OR_PASSWORD' });
    }
};

// Log Out Controller Function
export const logOutHomeOwner = async (req, res) => {
    removeRefreshToken(res);
    removeAccessToken(res);
    res.status(200).json({ message: 'Logged out successfully' });
};

// Refresh Token Controller Function
export const refreshToken = (req, res) => {
    const refreshToken = req.cookies?.refreshToken;

    // Check if refreshToken is present in cookies
    if (!refreshToken) {
        return res.status(401).json({ message: 'You dont have permission for this, Please log in.', code: 'REFRESH_TOKEN_NOT_FOUND' });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, refreshSecretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Session timed out. Please log in again.' });
        }

        // Generate a new access token
        const accessToken = generateAccessToken({ fullname: user.fullname, _id: user._id });

        setAccessToken(res, accessToken);

        return res.status(200).json({ message: 'Access token refreshed successfully' });
    });
};