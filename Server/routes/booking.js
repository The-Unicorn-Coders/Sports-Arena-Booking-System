const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/', bookingController.createBooking);

// Get today's active bookings
router.get('/active', bookingController.getActiveBookings);

// Get past bookings
router.get('/past', bookingController.getPastBookings);

// Cancel a booking
router.put('/:id/cancel', bookingController.cancelBooking);

module.exports = router;