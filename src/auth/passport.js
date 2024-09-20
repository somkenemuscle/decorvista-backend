import { homeOwner } from '../models/homeOwner.model.js';
import { interiorDesigner } from '../models/interiorDesigner.model.js';
import { secretKey } from './config.js';
import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';


// Function to extract token from cookies
const extractJwtFromCookies = (req) => {
    return req.cookies.accessToken;
};

const opts = {
    jwtFromRequest: extractJwtFromCookies,
    secretOrKey: secretKey
};

export default passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
        const existingHomeOwner = await homeOwner.findById(jwtPayload._id);
        const existingInteriorDesigner = await interiorDesigner.findById(jwtPayload._id);

        let User = null;

        if (existingHomeOwner) {
            User = existingHomeOwner;

        } else if (existingInteriorDesigner) {
            User = existingInteriorDesigner;

        }
        const user = User
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));

