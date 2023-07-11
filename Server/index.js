const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

const Stripe= require('stripe')(process.env.SECRET_KEY);
var cors = require ('cors');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const port = process.env.PORT || 5001;

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
    selectedCourt:String,
    name: String
  });
  
  // Create a model based on the schema
  const Booking = mongoose.model('Booking', bookingSchema);
  

app.listen(port, error => {
    if (error) throw error;
    console.log (`Server connected to http://localhost:${port}`);
  });

  app.post('/payment',async (req, res) => {
    let status,error;
    const {
        amount,
        token,
        court,
        date,
        duration,
        startTime,
        totalAmount,
    } = req.body;
    try {
        await Stripe.charges.create({
            source:token.id,
            amount,
            currency:"LKR",

        });

        const newPayment = new Payment({
            courtName: court,
            totalAmount: totalAmount
          });
      
          await newPayment.save();
        status="success"

    } catch (error) {        
        console.log(error);
        status="Failure"
    }
    res.json({error,status});
});


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
  

  //payment schema

  const paymentSchema = new mongoose.Schema({
    paymentDate: {
      type: Date,
      default: Date.now
    },
    courtName: String,
    totalAmount: Number
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);


