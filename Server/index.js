const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connect = require('./db');

const app = express();
const port = 8081;

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

app.use('/api/arenas', require('./routes/arenasRoute'));

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Invalid database connection...!', error);
  });
