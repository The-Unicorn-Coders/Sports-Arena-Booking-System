const BookingController = require('../models/booking');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { date, startTime, duration, court } = req.body;
        const booking = new BookingController({ date, startTime, duration, court });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while creating the booking.' });
    }
};

// Get today's active bookings
exports.getActiveBookings = async (req, res) => {
    try {
        const today = new Date().toISOString().split('T')[0]; // Get today's date
        const activeBookings = await BookingController.find({ date: today, status: 'active' });
        res.json(activeBookings);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching active bookings.' });
    }
};

// Get past bookings
exports.getPastBookings = async (req, res) => {
    try {
        const today = new Date().toISOString().split('T')[0]; // Get today's date
        const pastBookings = await BookingController.find({ date: { $lt: today } });
        res.json(pastBookings);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching past bookings.' });
    }
};

// Cancel a booking
exports.cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await BookingController.findById(id);

        if (!booking) {
            return res.status(404).json({ error: 'BookingController not found.' });
        }

        if (booking.status === 'cancelled') {
            return res.status(400).json({ error: 'BookingController is already cancelled.' });
        }

        // Check booking is for the future or today
        const today = new Date().toISOString().split('T')[0];
        if (booking.date > today) {
            booking.status = 'cancelled';
            await booking.save();
            return res.json(booking);
        }

        return res.status(400).json({ error: 'Cannot cancel past or active bookings.' });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while cancelling the booking.' });
    }
};