import React, { useState, useEffect } from "react";

import './Bugg.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
const Bugg = () => {

    const [ratings, setRatings] = useState([]);
    const [name, setName] = useState("");
    const [buggReview, setReview] = useState("");
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
  
      if (name.trim() === "" || buggReview.trim() === "") {
          alert(" Please provide a rating and review");
        setError("Please provide a rating and review");
        return;
      }
  
      try {
      
        const response = await fetch("http://localhost:5000/api/buggs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name,buggReview }),
        });
  
        if (response.ok) {
          
          fetchRatings();
          setName("");
          setReview("");
          setError("");
        } else {
          setError("Failed to save rating");
        }
      } catch (error) {
        console.log("Error submitting rating:", error);
      }
    };
  
  
    return <div>

    <div class="comment-box">
        <h3>Report a bug</h3><br/>
                     
        <form class="comment-form"  onSubmit={submitRating}>
    
         <label for="fname" class="subject1">Name</label><br/>
         <TextField  value={name}  onChange={(e) => setName(e.target.value)} id="outlined-basic1" label="Enter name" variant="outlined"  />
    
    
         <br/><br/>
    
         <label for="fname" class="subject2">Problem occured</label><br/>
         <TextField value={buggReview} onChange={(e) => setReview(e.target.value)} id="outlined-basic2" label="Enter the text...." variant="outlined"    /><br/>
    
    
         <Button type="submit" variant="contained"  class='btn'>Report</Button>
       
                        
          
        </form>
    </div>
    
    
            
    
    
      </div>;
    }
    
    Bugg.propTypes = propTypes;
    Bugg.defaultProps = defaultProps;
    // #endregion
export default Bugg;