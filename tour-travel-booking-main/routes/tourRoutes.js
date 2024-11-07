const express = require('express');
const router = express.Router();
const { getTours, createTour } = require('../controllers/tourController');

router.route('/').get(getTours).post(createTour);

module.exports = router;