// controllers/stopController.js
const Stop = require('../models/Stop');

// Get All Stops
exports.getAllStops = async (req, res) => {
  try {
    const stops = await Stop.find();
    res.status(200).json(stops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a Stop
exports.addStop = async (req, res) => {
  try {
    const { stopName, time } = req.body;
    const stop = new Stop({ stopName, time });
    await stop.save();
    res.status(201).json(stop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
