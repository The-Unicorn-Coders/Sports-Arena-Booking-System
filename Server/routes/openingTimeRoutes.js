const express = require('express');
const router = express.Router();
const openingTimeController = require('../controllers/openingTimeController');


// GET opening times for all arenas
router.get('/', openingTimeController.getOpeningTimesByArena);

module.exports = router;
