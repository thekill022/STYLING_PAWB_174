const express = require('express')
const bodyParser = require('body-parser')
const todoController = require('../controller/todoController')

const todo = express.Router()

todo.use(bodyParser.json())
todo.use(express.urlencoded({extended : true}))

// RESTFULL API
todo.get('/', todoController.read)
todo.post('/', todoController.create)
todo.put('/', todoController.update)
todo.delete('/', todoController.delete)

// PAGE RENDERING
todo.get('/dashboard', (req, res) => {
    res.send('berhasil masuk')
})

module.exports = todo