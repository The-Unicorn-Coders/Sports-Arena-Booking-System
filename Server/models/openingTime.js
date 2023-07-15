// {/*const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 8080;

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/openingtimes', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const openingTimeSchema = new mongoose.Schema(
//   {
//     arenaName: {
//       type: String,
//       required: true,
//     },
//     day: {
//       type: String,
//       required: true,
//     },
//     startTime: {
//       type: String,
//       required: true,
//     },
//     endTime: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// // Create a model based on the schema
// const OpeningTime = mongoose.model('OpeningTime', openingTimeSchema);

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // GET route to fetch data
// app.get('/api/data', (req, res) => {
//   // Retrieve all data from the MongoDB collection
//   OpeningTime.find()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send('Error retrieving data');
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server connected to http://localhost:${port}`);
// });*/}


// // const mongoose = require('mongoose');

// // // Connect to MongoDB
// // mongoose.connect('mongodb://27017/mydatabase', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //   })
// //   .catch((error) => {
// //     console.error('Error connecting to MongoDB:', error);
// //   });

// // // Define the booking schema
// // const bookingSchema = new mongoose.Schema({
// //   selectedDate: {
// //     type: Date,
// //     // required: true,
// //   },
// //   selectedTime: {
// //     type: String,
// //     required: true,
// //   },
// //   selectedDuration: {
// //     type: String,
// //     required: true,
// //   },
// //   selectedCourt: {
// //     type: String,
// //     required: true,
// //   },
// // }, { collection: 'bookings' }); // Specify the collection name as 'bookings'

// // // Create the Booking model
// // const Booking = mongoose.model('Booking', bookingSchema);

// // // Create a new booking instance
// // const newBooking = new Booking({
 
// //   selectedTime: '10:00 AM',
// //   selectedDuration: '1 hour',
// //   selectedCourt: 'Court A',
// // });

// // // Save the new booking
// // newBooking.save()
// //   .then((savedBooking) => {
// //     console.log('Booking saved:', savedBooking);
// //   })
// //   .catch((error) => {
// //     console.error('Error saving booking:', error);
// //   });

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// // const port = 8081;

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/openingtimes', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a schema for your data
// const bookingSchema = new mongoose.Schema({
//   name: Date,
//   imageUrl: String,
 
// });

// // Create a model based on the schema
// const Booking = mongoose.model('openingtimes', bookingSchema);

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // POST route to save data
// // POST route to save data
// // app.post('/api/openingtimes', (req, res) => {
// //   // Create a new instance of the Data model
// //   const newData = new Booking({
   
// //     name: req.body.name,
// //     imageUrl: req.body.imageUrl,
    
// //   });

// //   // Save the new data to MongoDB
// //   newData.save()
// //     .then((savedData) => {
// //       res.status(201).json(savedData);
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //       res.status(500).send('Error saving data');
// //     });
// // });


// // GET route to fetch data
// app.get('/api/openingtimes', (req, res) => {
//   // Retrieve all data from the MongoDB collection
//   Booking.find()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send('Error retrieving data');
//     });
// });



// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server connected to http://localhost:${port}`);
// // });



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});