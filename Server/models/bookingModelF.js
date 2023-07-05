const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  selectedDate: {
    type: Date,
    required: true,
  },
  selectedTime: {
    type: String,
    required: true,
  },
  selectedDuration: {
    type: String,
    required: true,
  },
  selectedCourt: {
    type: String,
    required: true,
  },
}, { collection: 'bookings' }); // Specify the collection name as 'bookings'

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
