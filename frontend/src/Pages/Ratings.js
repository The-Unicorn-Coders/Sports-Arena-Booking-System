//import React from 'react';
import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

import './Ratings.css';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

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
const Ratings = () => {

  const [averageRating, setAverageRating] = useState(0);
    const [ratings, setRatings] = useState([]);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [error, setError] = useState("");

  
    useEffect(() => {
      fetchRatings();
    }, []);
  
    const fetchRatings = async () => {
      try {
        const response=await fetch("http://localhost:5000/api/ratings");
       
      //  setData(response.data);
        const data = await response.json();
     
        setRatings(data);
        calculateAverageRating(data);
console.log(averageRating)
      
      } catch (error) {
        console.log("Error retrieving ratings:", error);
      }
    };

    
 
    const calculateAverageRating = (data) => {
      const totalRatings = data.length;
      const sumRatings = data.reduce((acc, rating) => acc + rating.rating, 0);
      const average = sumRatings / totalRatings;
      setAverageRating(average);
    };
  
  
  
    const [data,setData]=useState("");
    
  
    // const getData=async()=>{
     
    //   const response=await axios.get("http://localhost:5000/getData");
    //   setData(response.data);
      
    // }
  
  // eslint-disable-next-line no-undef 
  // useEffect(() => {
  
  //   getData()
  
  // }, []);
  
   // return  <div>{data}</div>
   return (
    <div className='grid'>


      
  
      
      {/* <div className="heading">
        <div className="heading1">Ratings and Reviews</div>
        <div className="heading2">Please rate your experience with us</div>
      </div>
      <div className='flex'>
        <div className="quantity">4.2</div>
        <div className="main_rating">
          <Rating name="size-large" defaultValue={2} size="large" />
        </div>
      </div>
  
      <div className="Rating_Stars">
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
        <div className="rectangle3"></div>
        <div className="rectangle4"></div>
        <div className="rectangle5"></div>
        <div className="rectangle6"></div>
        <div className="rectangle7"></div>
        <div className="rectangle8"></div>
      </div> */}
  
  <div>
        <div className="heading1">Ratings and Reviews</div>
        <div className="heading2">Please rate your experience with us</div>
      </div>
      <div className='flex'>
        <div className="quantity" value={averageRating} >{averageRating.toFixed(1)}</div>
        <div className="main_rating">
          <Rating name="size-large" defaultValue={2} size="large" />
        </div>
        <div className="Rating_Stars">
        <div className="rectangleStars1"></div>
      </div>
      </div>
    
  
      <br />
  
      <hr />
  
     
   
  
    <div>
      
    {ratings.length > 0 ? (
    <div className='rev_section'>
      <h2>Customer Reviews</h2>
      {ratings.map((rating, index) => (
        <div key={index}>
      <div className='currentDate'> <p> {rating.currentDate}</p></div>
           <div className="comment">
          <Rating name="size-small" defaultValue={rating.rating} />
          <h2 className="name">{rating.name1}</h2><br />
        </div>
       
          <p> {rating.review}</p>
          
         
        
          <hr />
        </div>
        
      ))}
      
    </div>
  ) : (
    <p>No ratings found</p>
  )}
  
  
  
       {ratings.length > 0 ? (
         <p></p>
        
         
        
        
      ) : (
        <p>No ratings found</p>
      )} 
    </div>
  </div>
  );
  }
  
  
  Ratings.propTypes = propTypes;
  Ratings.defaultProps = defaultProps;
  // #endregion
  

Ratings.propTypes = propTypes;
Ratings.defaultProps = defaultProps;
// #endregion

export default Ratings;