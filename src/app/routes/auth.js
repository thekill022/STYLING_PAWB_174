const express = require('express');
const bodyParser = require('body-parser')
const authController = require('../controller/authController')

const router = express.Router();

router.use(bodyParser.json())
router.use(express.urlencoded({extended : true}))

router.get('/login', (req, res) => {
    res.render('user_access/login')
});

router.get('/signup', (req, res) => {
    res.render('user_access/signup')
})

router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
