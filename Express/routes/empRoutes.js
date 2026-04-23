const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');

const schemavalidate = require('../validations/empValidation');
const validate = require('../MiddleWare/userMiddleWare');
router
    .route("/employees/create") 
    .post(validate(schemavalidate), empController.createEmployee);


module.exports = router