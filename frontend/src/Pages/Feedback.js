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
        body: JSON.stringify({ rating, review }),
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

  <Button type="submit" variant="contained"  class='s-btn'>Submit</Button>

</form>


    </div>;
}

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
// #endregion

export default Feedback;