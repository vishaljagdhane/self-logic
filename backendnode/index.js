var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const app_express = express();
var Api_Router = require('./ApisFile'); // Import API router

// Middleware setup
app_express.use(cors());
app_express.use(bodyParser.json());

// Root route with a welcome message
app_express.get('/', (req, res) => {
    res.send(`
      <h1>Welcome To The React and Node JS SQL Postgres Server</h1>
    `);
});

// Use API routes
app_express.use('/api', Api_Router);

// Set the server to listen on port 4100
const port = 4100;
app_express.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
