/*const mongoose = require('mongoose');

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

module.exports = Booking;*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
next();
});

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for your data
const bookingSchema = new mongoose.Schema({
  selectedDate: Date,
  selectedTime: String,
  selectedDuration:String,
  selectedCourt:String
});

// Create a model based on the schema
const Booking = mongoose.model('Booking', bookingSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// POST route to save data
app.post('/api/data', (req, res) => {
  // Create a new instance of the Data model
  const newData = new Booking({
   
    selectedDate: req.body.selectedDate,
    selectedTime: req.body.selectedTime,
    selectedDuration: req.body.selectedDuration,
    selectedCourt:req.body.selectedCourt,
    name: req.body.name
  });

  // Save the new data to MongoDB
  newData.save()
    .then((savedData) => {
      res.status(201).json(savedData);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error saving data');
    });
});


// GET route to fetch data
app.get('/api/data', (req, res) => {
  // Retrieve all data from the MongoDB collection
  Booking.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error retrieving data');
    });
});



// Start the server
app.listen(port, () => {
  console.log (`Server connected to http://localhost:${port}`);
});
