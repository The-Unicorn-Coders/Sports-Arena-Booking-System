const express = require('express');
const db = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3330;
const arenasRoute = require('./routes/arenasRoute');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors({
  origin: '*',
  methods: ['get', 'post'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to database');
});

app.use('/api/arenas', arenasRoute)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
