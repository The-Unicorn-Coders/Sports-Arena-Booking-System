const OpeningTime = require('../models/OpeningTime');

// Get opening times for a specific arena
exports.getOpeningTimesByArena = async (req, res) => {
  const { arenaName } = req.params;
  try {
    const openingTimes = await OpeningTime.find({ arenaName });
    res.json(openingTimes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch opening times' });
  }
};
