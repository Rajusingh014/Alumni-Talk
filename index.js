const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Routes
const authRoutes = require('./routes/auth');
const alumniRoutes = require('./routes/alumniRoutes'); // NEW

app.use('/api/auth', authRoutes);
app.use('/api/alumni', alumniRoutes); // NEW

app.get('/', (req, res) => {
  res.send('Alumni Talk API is running!');
});

// Connect to MongoDB (will work when DB setup is done)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
