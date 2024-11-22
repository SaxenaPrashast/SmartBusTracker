// models/Stop.js
const mongoose = require('mongoose');

const StopSchema = new mongoose.Schema({
  stopName: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Stop', StopSchema);
