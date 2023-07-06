const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connect = require('./db');

const bookingsRoute = require('./routes/bookingsRoute')


const app = express();
const port = 3330;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(morgan('tiny'));
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.status(201).json('Home GET Request');
});


app.use ('/bookingsRoute', bookingsRoute )


connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Invalid database connection...!', error);
  });
