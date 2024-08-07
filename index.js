const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://oceanofmovies.tech',
  'http://d14e5w6ohl9s1r.cloudfront.net',
  'https://d14e5w6ohl9s1r.cloudfront.net',
  'http://ec2-54-167-80-47.compute-1.amazonaws.com:3000',
  'https://oceanofmovies.tech',
  'https://mayurgavhane.admin.oceanofmovies.tech',
  'http://localhost:4000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Define Routes
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
