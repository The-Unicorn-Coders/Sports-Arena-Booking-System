import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookSports.css';

const BookSports = (props) => {

  const navigate = useNavigate();
  // Check if 'props.arena' exists
  if (!props.arena) {
    return <div>Arena information not available</div>;
  }

  // Destructure the properties from 'props.arena' with default values
  const { name = '', address = '', imageUrl = '' } = props.arena;


  const handleBookNow = () => {
    navigate('/booking'); // Navigate to the "Livepage" route
  };

  return (
    <div>
      {props.arena && (
        <div className='card'>
          <div className='frame-Home'>
            <img src={imageUrl} alt="menuPic" className="img-set" />
            <div className='second-section'>
              <center>
                <h3>{name}</h3>
                <p>{address}</p>
                <button className="button">Details</button>
                <button className="button" onClick={handleBookNow}>Book Now</button>
              </center>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSports;
