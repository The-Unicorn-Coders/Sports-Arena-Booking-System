const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
//const connect = require('./db');
const bookingRoutes= require('./routes/bookingRoutesF')
const Booking = require('./models/bookingModelF');


//const bookingsRoute = require('./routes/bookingsRoute')


const app = express();
const port = 8080;



app.use(express.json())
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.status(201).json('Home GET Request');
});


/*app.use ('/bookingsRoute', bookingsRoute );*/
app.use ('/api/bookings', bookingRoutes);



/*connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Invalid database connection...!', error);
  });*/
