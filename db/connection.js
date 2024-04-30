// Import mysql2
const mysql2 = require('mysql2');

// Create a connection to the database
const connection = mysql2.createConnection({
    host: 'localhost',              // MySQL server address
    user: 'root',                   // MySQL username
    password: '-eEVTH8CXgFd8soA26', // MySQL password
    database: 'employee_db'         // MySQL database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        // If there is an error, display an error message
        throw err;
    }
});

// Export the connection
module.exports = connection;
