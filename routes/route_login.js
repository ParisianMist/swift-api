const express = require('express');
const router = express.Router();
const { employeeLogin } = require('../controllers/loginController')

router.use(express.json())

router
    .route('/')
    .post(employeeLogin)
module.exports = router
