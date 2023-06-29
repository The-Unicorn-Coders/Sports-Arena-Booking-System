import React from 'react'
import './Main.css'
import SportButtons from './SportButtons'; 
import './ExpolertPart.css'; 
import BookSports from './BookSports';
import SearchBox from "./SearchBox";

function ExpolerPart() {
  // Component rendering Explore by Sports topic, SportButtons component, and BookSports component
  return (
    <div className="HHeader2">
        <p className='topic' style={{top: -40}} >Search Sport</p>
        <SearchBox/>
        <BookSports/>
    </div>
  );
}

export default ExpolerPart; // Exporting the component
