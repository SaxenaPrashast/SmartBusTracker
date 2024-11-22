// models/Bus.js
const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
  busId: { type: String, required: true, unique: true },
  location: { lat: Number, lng: Number },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bus', BusSchema);
