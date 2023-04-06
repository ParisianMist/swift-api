const express = require('express');
const router = express.Router();
const { allShifts, oneShift,postShift } = require('../controllers/shiftController')

router.use(express.json())

router
    .route('/')
    .get(allShifts)

router
    .route('/:id')
    .get(oneShift)
    .patch(postShift)

module.exports = router