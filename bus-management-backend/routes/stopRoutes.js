// routes/stopRoutes.js
const express = require('express');
const { getAllStops, addStop } = require('../controllers/stopController');
const router = express.Router();

router.get('/', getAllStops);
router.post('/add', addStop);

module.exports = router;
