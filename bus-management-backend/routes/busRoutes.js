// routes/busRoutes.js
const express = require('express');
const { updateBusLocation, getBusLocation } = require('../controllers/busController');
const router = express.Router();

router.post('/update-location', updateBusLocation);
router.get('/:busId', getBusLocation);

module.exports = router;
