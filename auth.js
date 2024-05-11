const express = require('express');
const app = express();
const mysql = require('mysql');

// Create connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'HospitalDB' // Name of your database
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

// Define API endpoint to fetch users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM Users', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Define API endpoint to create a new patient
app.post('/patients', (req, res) => {
  // Handle request to insert new patient into Patients table
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
