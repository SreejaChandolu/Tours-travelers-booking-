const Tour = require('../models/Tour');

// @desc Get all tours
// @route GET /api/tours
exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc Create a new tour
// @route POST /api/tours
exports.createTour = async (req, res) => {
  try {
    const { title, description, location, price, date } = req.body;
    const newTour = new Tour({ title, description, location, price, date });
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};