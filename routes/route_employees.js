const express = require('express');
const router = express.Router();
const { allEmployees } = require('../controllers/employeesController')

router.use(express.json())

router
    .route('/')
    .get(allEmployees)

module.exports = router