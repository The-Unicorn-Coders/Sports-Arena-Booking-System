import React, { useState, useEffect } from "react";

import './Feedback.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Feedback = () => {
  const [ratings, setRatings] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [currentDate, setCurrentDate] = useState(""); // New state variable for current date

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    // try {
    //   const response = await fetch("http://localhost:5000/api/ratings");
    //   const data = await response.json();
    //   setRatings(data);
    // } catch (error) {
    //   console.log("Error retrieving ratings:", error);
    // }
  };
  
  const submitRating = async (e) => {
    e.preventDefault();

    if (rating === 0 || review.trim() === "") {
        alert(" Please provide a rating and review");
      setError("Please provide a rating and review");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, review ,currentDate}),
      });

      if (response.ok) {
        fetchRatings();
        setRating(0);
        setReview("");
        setError("");
      } else {
        setError("Failed to save rating");
      }
    } catch (error) {
      console.log("Error submitting rating:", error);
    }
  };

      
  const handleRatingSubmit = () => {
    // Capture the current date
    const date = new Date();
    setCurrentDate(date.toLocaleDateString()); // Convert date to string format (e.g., "2023-06-16T12:34:56.789Z")

    // TODO: Perform other actions related to rating submission
    // ...
  };



    return <div class="wrapper">
<form class="comment-form"  onSubmit={submitRating}>
<div className="headings">
  <div className="heading-1">Give Feedback</div>
  <div className="heading-2"> Please rate your experience with us</div><br/>
    
  <Rating   value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))} name="Ratingicons" defaultValue={2} size="large" /><br/><br/>
  

</div>


  <label for="fname" class="subject3">Add your reviews here</label>
  <br/>
  <TextField    value={review}
            onChange={(e) => setReview(e.target.value)} id="outlined-basic3" label="Enter the text..." variant="outlined" />

  <Button type="submit" variant="contained"  class='s-btn' onClick={handleRatingSubmit}>Submit</Button>
  {/* Display the current date */}


</form>


    </div>;
}

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
// #endregion

export default Feedback;