// controllers/busController.js
const Bus = require('../models/Bus');

// Update Bus Location
exports.updateBusLocation = async (req, res) => {
  try {
    const { busId, lat, lng } = req.body;
    const bus = await Bus.findOneAndUpdate(
      { busId },
      { location: { lat, lng }, lastUpdated: Date.now() },
      { new: true, upsert: true }
    );
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Bus Location
exports.getBusLocation = async (req, res) => {
  try {
    const { busId } = req.params;
    const bus = await Bus.findOne({ busId });
    if (!bus) return res.status(404).json({ message: 'Bus not found' });
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
