const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingControllersF');

router.post('/', bookingController.createBooking);
router.get('/getbookings', bookingController.getBookings);

module.exports = router;


