const express = require('express');
const cors = require('cors');
//const morgan = require('morgan');
//const connect = require('./db');
//const bookingRoutes = require('./routes/bookingRoutesF');
//const openingTimeRoutes = require('./routes/openingTimeRoutes');
const router = require('./routes/arenaRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const port = 8080;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);


app.get('/', (req, res) => {
  res.status(201).json('Home GET Request');
});


//app.use('/api/bookings', bookingRoutes);
//app.use('/api/openingTimes', openingTimeRoutes);
app.use("/arenas", router);



// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});

{/*connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Invalid database connection...!', error);
  });*/}

  // Create a schema for your data
const bookingSchema = new mongoose.Schema({
  selectedName:String,
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


// Create a schema for your data
const openTimeSchema = new mongoose.Schema({

  name:String,
  sun: String,
  mon: String,
  tue:String,

});

// Create a model based on the schema
const Opentime = mongoose.model('Opentime', openTimeSchema);

// POST route to save data
// POST route to save data
app.post('/api/data', (req, res) => {
  // Create a new instance of the Data model
  const newData = new Booking({
    selectedName: req.body.selectedName,
    selectedDate: req.body.selectedDate,
    selectedTime: req.body.selectedTime,
    selectedDuration: req.body.selectedDuration,
    selectedCourt:req.body.selectedCourt
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

app.post('/api/opentimes', (req, res) => {
  // Create a new instance of the Data model
  const newData = new Opentime({ 
   
name: req.body.name,
sun: req.body.sun,
mon: req.body.mon,
tue: req.body.tue

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


// GET route to fetch opening times for a selected arena
app.get('/api/opentimes', (req, res) => {
  const selectedArena = req.query.selectedArena;


  // Retrieve all data from the MongoDB collection
  Opentime.find()
  
    .then((data) => {

  
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error retrieving data');
    });
});