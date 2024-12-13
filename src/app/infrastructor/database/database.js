const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createConnection({
    user : process.env.USER,
    host : process.env.HOST,
    database : process.env.DB,
    password : process.env.DB_PASS
})

db.connect((err) => {
    if(err) {
        console.log("Database Unconnected")
    } else {
        console.log("Database Connected")
    }
})

module.exports = db