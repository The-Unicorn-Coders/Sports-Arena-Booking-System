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
});

// Create the rating model
const Rating = mongoose.model("Rating", ratingSchema);

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


// API endpoint to submit a rating and review
app.post("/api/ratings",  (req, res) => {
 // console.log(" ratinf");

  const { rating, review } = req.body;
  const newRating = new Rating({ rating, review });

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
