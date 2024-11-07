const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true }, // URL for tour image
  nearbyPlaces: { type: [String], required: true } // Array of nearby places
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;