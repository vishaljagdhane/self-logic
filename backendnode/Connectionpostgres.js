const { Client } = require('pg'); // Import the pg Client

const DataBase_Hosting = 'localhost';
const PostgresUser_Name = 'postgres'; // PostgreSQL username
const Postgres_Password = '121'; // PostgreSQL password
const DataBase_Name = 'vishal';  // Database Name
const DataBase_Port = 5432; // PostgreSQL port (default is 5432)

const client = new Client({
    host: DataBase_Hosting,
    user: PostgresUser_Name,
    password: Postgres_Password,
    database: DataBase_Name,
    port: DataBase_Port,
});

// Connecting to PostgreSQL
client.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log("Connected to PostgreSQL!");
    }
});

module.exports = client; // Export client to be used in other parts of the app
