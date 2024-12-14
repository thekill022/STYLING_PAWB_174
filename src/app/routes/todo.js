const express = require('express')
const bodyParser = require('body-parser')
const todoController = require('../controller/todoController')

const todo = express.Router()

todo.use(bodyParser.json())
todo.use(express.urlencoded({extended : true}))

// RESTFULL API
todo.get('/', todoController.readAccount)
todo.get('/get/:id', todoController.readById)
todo.get('/all', todoController.readAll)
todo.post('/', todoController.create)
todo.put('/update/:id', todoController.update)
todo.delete('/delete/:id', todoController.delete)

// PAGE RENDERING
todo.get('/dashboard', (req, res) => {
    const {id, username, email} = req.session.user

    res.render('pages/main', {id, username, email})
})

module.exports = todo