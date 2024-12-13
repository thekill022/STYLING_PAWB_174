const express = require('express')
const bodyParser = require('body-parser')
const userController = require('../controller/userController')

const user = express.Router()

user.use(bodyParser.json())
user.use(express.urlencoded({extended : true}))

user.get('/', userController.readAll)
user.get('/:id', userController.readId)
user.post('/', userController.create)
user.put('/', userController.updatePass)
user.delete('/:id', userController.updatePass)

module.exports = user