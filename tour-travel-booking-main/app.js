const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const tourRoutes = require('./routes/tourRoutes');
const path = require('path');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML file for views
app.use(express.static(path.join(__dirname, 'views')));

// API Routes
app.use('/api/tours', tourRoutes);

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
