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

const port = 8081;

const app = express();
// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
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

// Define the payment schema
const paymentSchema = new mongoose.Schema({
  totalAmount: Number,
  courtName: String,
  bookingDate: Date,
});

// Define the payment model
const Payment = mongoose.model("Payment", paymentSchema);

// API endpoint for fetching income summary data
/*app.get('/api/income-summary', async (req, res) => {
  try {
    const incomeSummary = await Payment.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            courtName: "$courtName",
          },
          totalAmount: { $sum: "$totalAmount" },
        },
      },
      {
        $group: {
          _id: "$_id.month",
          monthlyIncome: {
            $push: {
              courtName: "$_id.courtName",
              totalAmount: "$totalAmount",
            },
          },
        },
      },
    ]);
    res.json(incomeSummary);
  } catch (error) {
    console.error("Error fetching income summary data:", error);
    res.status(500).json({ error: "An error occurred while fetching income summary data" });
  }
});

// API endpoint for fetching total income for a specific day
/*app.get("/api/total-income/:date", async (req, res) => {
  try {
    const { date } = req.params;
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const totalIncome = await Payment.aggregate([
      {
        $match: {
          bookingDate: { $gte: startOfDay, $lte: endOfDay },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalAmount" },
        },
      },
    ]);

    res.json({ totalIncome: totalIncome.length > 0 ? totalIncome[0].totalAmount : 0 });
  } catch (error) {
    console.error("Error fetching total income:", error);
    res.status(500).json({ error: "An error occurred while fetching total income" });
  }
});*/

app.get("/api/total-income", async (req, res) => {
  try {
    const totalIncome = await Payment.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalAmount" },
        },
      },
    ]);

    res.json({ totalIncome: totalIncome.length > 0 ? totalIncome[0].totalAmount : 0 });
  } catch (error) {
    console.error("Error fetching total income:", error);
    res.status(500).json({ error: "An error occurred while fetching total income" });
  }
});


app.get("/api/payments", async (req, res) => {
  try {
    const payments = await Payment.aggregate([
      {
        $group: {
          _id: "$courtName",
          totalAmount: { $sum: "$totalAmount" },
        },
      },
    ]);
    res.json(payments);
  } catch (error) {
    console.error("Error fetching payment data:", error);
    res.status(500).json({ error: "An error occurred while fetching payment data" });
  }
});


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// POST route to save data
/*app.post('/api/data', (req, res) => {
  // Create a new instance of the Data model
  const newData = new Booking({
   
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
});*/


// GET route to fetch data
app.get('/api/data', (req, res) => {
  console.log(req.body);

  // Retrieve all data from the MongoDB collection
  Booking.find()
    .then((data) => {
      //res.status(200).json(data);
      return res.json(data);
      //console.log(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error retrieving data');
    });
});



// Start the server
app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
