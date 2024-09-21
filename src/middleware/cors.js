import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create and export the CORS middleware configuration
const allowedOrigins = ['http://localhost:3000', 'https://decorvista.vercel.app'];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Check if the incoming origin is in the allowed origins array
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
});

export default corsMiddleware;
