import React from 'react';
import './Main.css';
//import SearchBox from './SearchBox';

export default function HHeader1() {
  return (
    
    <div className="HHeader1" style={{marginTop:-700}}>
        {/* This div contains two span elements that display the header text. */}
        <div>
            <span className="header" >Quick Booking</span>
            <span className='header2'>You can search what you want.....</span>
        </div>
        {/* This div contains the SearchBox component which will render a search bar. */}
        <div className="bar">

        </div>
    </div>
  )
}
