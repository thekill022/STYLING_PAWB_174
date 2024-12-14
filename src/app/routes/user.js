const express = require('express')
const bodyParser = require('body-parser')
const userController = require('../controller/userController')
const middleware = require('../infrastructor/middleware/middleware')

const user = express.Router()

user.use(bodyParser.json())
user.use(express.urlencoded({extended : true}))

user.get('/', userController.readAll)
user.get('/get/:id', userController.readId)
user.post('/', userController.create)
user.put('/', userController.updatePass)
user.delete('/', userController.delete)

user.get('/profile', (req,res) => {
    const {id, username, email} = req.session.user
    res.render('pages/profile', {id, username, email})
})
user.get('/home', middleware.isAuthenticated, (req,res) => {
    const {id, username, email} = req.session.user
    res.render('pages/home', {id, username, email})
})

module.exports = user