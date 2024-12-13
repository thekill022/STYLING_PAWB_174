const express = require('express')
const session = require('express-session')
const user = require('./user')
const todo = require('./todo')
const auth = require('./auth')
const middleware = require('../infrastructor/middleware/middleware')

const app = express.Router()

app.use(express.json()); // Untuk menerima JSON
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000 * 10
    }
}));


app.use('/login', auth)
app.use('/user', user)
app.use('/todo', middleware.isAuthenticated, todo)

app.get('/', (req, res) => {
    res.status(200).json({
        status : 200,
        message : "Berhasil Meng-akses API"
    })
})

module.exports = app