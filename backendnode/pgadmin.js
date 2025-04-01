const { Client } = require('pg');

// PostgreSQL client configuration
const client = new Client({
  host: 'localhost',   // Change if you're using a remote server
  port: 5432,          // Default PostgreSQL port
  user: 'postgres', // Replace with your PostgreSQL username
  password: '121', // Replace with your PostgreSQL password
  database: 'vishal', // Replace with your PostgreSQL database name
});

async function run() {
  try {
    // Connect to PostgreSQL
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Create the 'users' table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `;
    await client.query(createTableQuery);
    console.log('Table created successfully or already exists.');

    // Insert data into the 'users' table
    const insertQuery = `
      INSERT INTO users (name, email) 
      VALUES ($1, $2) 
      RETURNING id, name, email;
    `;
    const values = ['John Doe', 'john.doe@example.com'];
    const insertResult = await client.query(insertQuery, values);
    console.log('Data inserted:', insertResult.rows[0]);

    // Retrieve data from the 'users' table
    const selectQuery = 'SELECT * FROM users;';
    const selectResult = await client.query(selectQuery);
    console.log('Data retrieved:', selectResult.rows);

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    // Close the connection
    await client.end();
    console.log('Connection closed');
  }
}

// Run the program
run();
