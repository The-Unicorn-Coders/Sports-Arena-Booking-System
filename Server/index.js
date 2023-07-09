const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose= require('mongoose');
const Booking = require('./models/bookingModelF');
const connect = require('./db');
const bookingRoutes = require('./routes/bookingRoutesF');

const app = express();
const port = 8081;


/*app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  }));*/




app.get('/getbookings', (req, res) => {
  Booking.find()
  .then(bookings=>res.json(bookings))
  .catch (err=> res.json(err))

});

app.get('/', (req, res) => {
  res.status(201).json('Home GET Request');
});

app.use('/api/arenas', require('./routes/arenasRoute'));
app.use('/api/bookings', bookingRoutes); // Use the bookingRoutes here


/*connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
 })
    .catch((error) => {
    console.log('Invalid database connection...!', error);
  });*/
