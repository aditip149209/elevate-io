const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const resumeRoutes = require('./routes/resumeRoutes');

const cors = require('cors');

// Allow Vite Frontend (port 5173 by default)

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// Routes
app.use('/api/resumes', resumeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


app.get('/', (req, res) => {
  res.send('Welcome to the ElevateCV.io Backend');
});