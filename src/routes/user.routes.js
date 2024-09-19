import express from 'express';
import handleAsyncErr from '../utils/catchAsync.js'
const router = express.Router();
import { signInHomeOwner, signUpHomeOwner, logOutHomeOwner, refreshToken } from '../controllers/userAuth.controller.js';
import { signInLimiter, signUpLimiter } from '../middleware/rateLimiter.js';

// /Signup post route
router.post("/signup", signUpLimiter, handleAsyncErr(signUpHomeOwner));

// POST /login route
router.post("/signin", signInLimiter, handleAsyncErr(signInHomeOwner));

// POST /logout route
router.post("/logout", handleAsyncErr(logOutHomeOwner));

//Refresh Token
router.post("/token", handleAsyncErr(refreshToken));


export default router;