// routes/locationRoutes.js

const express = require('express');
const router = express.Router();
const Location = require('../models/location');

// Get user's location
router.get('/location', async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create user's location
router.post('/location', async (req, res) => {
    const { latitude, longitude } = req.body;

    try {
        const newLocation = new Location({ latitude, longitude });
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
