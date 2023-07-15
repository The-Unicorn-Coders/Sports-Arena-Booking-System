// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb://27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// // Define the booking schema
// const bookingSchema = new mongoose.Schema({
//   selectedDate: {
//     type: Date,
//     // required: true,
//   },
//   selectedTime: {
//     type: String,
//     required: true,
//   },
//   selectedDuration: {
//     type: String,
//     required: true,
//   },
//   selectedCourt: {
//     type: String,
//     required: true,
//   },
// }, { collection: 'bookings' }); // Specify the collection name as 'bookings'

// // Create the Booking model
// const Booking = mongoose.model('Booking', bookingSchema);

// // Create a new booking instance
// const newBooking = new Booking({
 
//   selectedTime: '10:00 AM',
//   selectedDuration: '1 hour',
//   selectedCourt: 'Court A',
// });

// // Save the new booking
// newBooking.save()
//   .then((savedBooking) => {
//     console.log('Booking saved:', savedBooking);
//   })
//   .catch((error) => {
//     console.error('Error saving booking:', error);
//   });
/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');*/
/*
const app = express();
const port = 8080;*/

// Connect to MongoDB
{/*mongoose.connect('mongodb://0.0.0.0:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/}





// Start the server
//app.listen(port, () => {
 // console.log(`Server connected to http://localhost:${port}`);
//});
