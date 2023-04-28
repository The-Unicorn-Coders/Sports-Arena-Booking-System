const express = require('express');
const db = require('./db');
const cors = require('cors');
const bodyParser=require('body-parser');
const app = express();
const port = process.env.PORT || 3330;
const courtRouter=require('./routes/courts');
app.use(bodyParser.json());
//app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(cors({
origin: '*',
methods: ['get','post'],
allowedHeaders: ['Content-Type', 'Authorization'],
}));  

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to database');
});

//app.use(express.json());
app.use('/add',courtRouter);


app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
