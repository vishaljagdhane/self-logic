const express = require('express');
const Api_Router = express.Router();
const connectionModule = require('./Connectionpostgres'); // Import PostgreSQL client

// API route to get user data from the 'users' table
Api_Router.get('/userData', (req, res) => {
    const query = 'SELECT * FROM users'; // SQL query to fetch all data from 'users' table

    connectionModule.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Failed to fetch data from database' });
        } else {
            res.status(200).json(results.rows); // Send the data from 'rows' as JSON response
            console.log("Fetched data successfully");
        }
    });
});

Api_Router.post('/create-database', (req, res) => {
    const databaseName = req.body.databaseName;  // Accessing the correct property
    const createDatabaseQuery = `CREATE DATABASE ${databaseName}`;  // Using string interpolation

    // First, run the SQL query to create the database
    connectionModule.query(createDatabaseQuery, (error, results) => {
        if (error) {
            // Handle the error and send a response
            res.status(500).json({ error: 'Failed to create the database' });
        } else {
            // After the query is successful, send the HTML response
            res.send(`<h1>Database created successfully: ${databaseName}</h1>`);
            console.log("Database created successfully");
        }
    });
});


module.exports = Api_Router;
