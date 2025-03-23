const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/models/config/database')

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
