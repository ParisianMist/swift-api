const express = require('express');
const router = express.Router();
const { allEmployees, oneEmployee, employeeLogin, getEmployeeSchedule } = require('../controllers/employeesController')

router.use(express.json())

router
    .route('/')
    .get(allEmployees)


router.route('/schedule')
    .get(getEmployeeSchedule)
router
    .route('/:id')
    .get(oneEmployee)

module.exports = router