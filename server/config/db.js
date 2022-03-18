const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost:3306',
    user: 'root',
    password: '1234',
    database: 'portfolio'
});
 
module.exports = db;