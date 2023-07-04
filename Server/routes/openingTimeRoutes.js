const express = require('express');
const router = express.Router();
const openingTimeController = require('../controllers/openingTimeController');

// GET opening times for all arenas
router.get('/', async (req, res) => {
  try {
    const openingTimes = await OpeningTime.find();
    res.json(openingTimes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch opening times' });
  }
});

module.exports = router;
