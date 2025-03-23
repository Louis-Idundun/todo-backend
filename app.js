const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database')

const app = express();
const PORT = 5000;
const swaggerUi = require('swagger-ui-express');
const specs = require('./src/swagger/swagger')

const cors = require('cors');

app.use(bodyParser.json());

const todoRoutes = require('./src/routes/todoRoutes'); // Adjust the path as necessary

// Middleware
app.use(bodyParser.json());

app.use(express.json());

app.use('/', todoRoutes);

//cors for frontend api calls
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Allow frontend URL


// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
});
