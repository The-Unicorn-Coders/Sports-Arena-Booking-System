import React from 'react'
import './BookSport.css';

// Define a functional component named BookSports
function BookSports() {
  // Return the following JSX code
  return (
    <div className="Scricket1" >
      {/* First playground section */}
      <div className='p1' style={{marginTop:600}} >
        <img className='playground1' src='cricket-lanes.jpg' alt='playground' />
        <div className='cricket1'>
          <center><span className='f1'>Sport</span></center>
        </div>
      </div>

      {/* Second playground section */}
      <div className='p2'style={{marginTop:600}}>
        <img className='playground2' src='cricket-lanes.jpg' alt='playground' />
        <div className='cricket2'>
          <center><span className='f1'>Sport</span></center>
        </div>
      </div>

      {/* Third playground section */}
      <div className='p3'style={{marginTop:600}}>
        <img className='playground3' src='cricket-lanes.jpg' alt='playground' />
        <div className='cricket3'>
          <center><span className='f1'>Sport</span></center>
        </div>
      </div>
       
      {/* Fourth playground section */}
      <div className='p4'style={{marginTop:600}}>
        <img className='playground4' src='cricket-lanes.jpg' alt='playground' />
        <div className='cricket4'>
          <center><span className='f1'>Sport</span></center>
        </div>
      </div>

      {/* Fifth playground section */}
      <div className='p5' style={{marginTop:600}}>
        <img className='playground5' src='cricket-lanes.jpg' alt='playground' />
        <div className='cricket5'>
          <center><span className='f1'>Sport</span></center>
        </div>
      </div>

    </div>
  );
}

// Export the BookSports component as the default export
export default BookSports;
