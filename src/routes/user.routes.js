import express from 'express';
import handleAsyncErr from '../utils/catchAsync.js'
const router = express.Router();
import { signInHomeOwner, signUpHomeOwner, signUpInteriorDesigner, logOutHomeOwner, refreshToken } from '../controllers/userAuth.controller.js';
import { signInLimiter, signUpLimiter } from '../middleware/rateLimiter.js';
import { getDesigners } from '../controllers/interiorDesigner.controller.js';

// /Signup post route for home owner
router.post("/home-owner/signup", signUpLimiter, handleAsyncErr(signUpHomeOwner));


// /Signup post route for designer
router.post("/designer/signup", signUpLimiter, handleAsyncErr(signUpInteriorDesigner));


// POST /login route
router.post("/signin", signInLimiter, handleAsyncErr(signInHomeOwner));

//Get / designers route
router.get("/designers", handleAsyncErr(getDesigners));


// POST /logout route
router.post("/logout", handleAsyncErr(logOutHomeOwner));

//Refresh Token
router.post("/token", handleAsyncErr(refreshToken));


export default router;