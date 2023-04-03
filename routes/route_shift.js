const express = require('express');
const router = express.Router();
const { allShifts, oneShift } = require('../controllers/shiftController')

router.use(express.json())

router
    .route('/')
    .get(allShifts)

router
    .route('/:id')
    .get(oneShift)

module.exports = router