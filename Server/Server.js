const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//var async = require('async');
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/ratings", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the rating and review schema
const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  currentDate:{

type: String,
required:true,

  },
  name1:{
    type: String,

  }

});


const buggSchema=new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  buggReview:{
    type: String,
    required: true,
  
  }

});
// Create the rating model
const Rating = mongoose.model("Rating", ratingSchema);
const Bugg = mongoose.model("Bugg", buggSchema);

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint to retrieve ratings and reviews
app.get("/api/ratings", async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve ratings" });
    console.log(error);
  }
});

app.get("/api/buggs", async (req, res) => {
  try {
    const buggs = await Bugg.find();
    res.status(200).json(buggs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve buggs" });
    console.log(error);
  }
});


// API endpoint to submit a rating and review
app.post("/api/ratings",  (req, res) => {
 // console.log(" ratinf");

  const { rating, review,currentDate,name1 } = req.body;
  const newRating = new Rating({ rating, review,currentDate });

  // newRating.save((err) => {
    // if (err) {
    //   res.status(500).json({ error: "Failed to save rating" });
    // } else {
    //   res.status(200).json({ message: "Rating saved successfully" });
    // }
  // });
  newRating.save()
    .then(() => {
      res.status(200).json({ message: "Rating saved successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to save rating" });
    });
 
});


// API endpoint to submit a rating and review
app.post("/api/buggs",  (req, res) => {
   
   
     const { name, buggReview } = req.body;
     const newBuggs = new Bugg({ name,buggReview });
     console.log(name);
     console.log(buggReview);
     // newRating.save((err) => {
       // if (err) {
       //   res.status(500).json({ error: "Failed to save rating" });
       // } else {
       //   res.status(200).json({ message: "Rating saved successfully" });
       // }
     // });
     newBuggs.save()
       .then(() => {
         res.status(200).json({ message: "Bugg saved successfully" });
       })
       .catch((err) => {
         console.error(err);
         res.status(500).json({ error: "Failed to save bugg" });
       });
    
   });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



//Bug report display
// const express = require('express');



// app.get('/api/table', (req, res) => {
//   const data = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 30 },
//     { id: 3, name: 'Bob', age: 35 }
//   ];
//   res.json(data);
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


