const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '-eEVTH8CXgFd8soA26',
    database: 'employees'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;