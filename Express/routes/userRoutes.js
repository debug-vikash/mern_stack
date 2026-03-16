const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get("/users", userController.getUsers);

router.post("/add/users", userController.addUsers);

module.exports = router