import React from 'react'
import './Main.css'
import SportButtons from './SportButtons'; 
import './ExpolertPart.css'; 
import BookSports from './BookSports'; 

function ExpolerPart() {
  // Component rendering Explore by Sports topic, SportButtons component, and BookSports component
  return (
    <div className="HHeader2" style={{marginTop:-850}}>
        <p className='topic' >Explore by Sports</p> 
        <SportButtons/>
        <BookSports/>
    </div>
  );
}

export default ExpolerPart; // Exporting the component
