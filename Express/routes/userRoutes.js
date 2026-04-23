const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const schemavalidate = require('../validations/userValidation')
const validate = require('../MiddleWare/userMiddleWare')
   
   
router
    .route("/users/create") 
    .post(validate(schemavalidate), userController.createUsers);


module.exports = router