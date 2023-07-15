const Booking = require('../models/bookingModelF');

exports.createBooking = async (req, res) => {
  try {
    const { selectedDate, selectedTime, selectedDuration, selectedCourt } = req.body;

    // Create a new booking object
    const booking = new Booking({
      selectedDate,
      selectedTime,
      selectedDuration,
      selectedCourt,
    });

    console.log('Received booking details:', booking);

    // Save the booking to the database
    await booking.save();

    console.log('Booking saved:', booking);

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    // Retrieve all bookings from the database
    const bookings = await Booking.find();

    console.log('Retrieved bookings:', bookings);

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
