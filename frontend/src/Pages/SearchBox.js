import React from 'react'
import './SearchBox.css'
import SearchIcon from '@mui/icons-material/Search';

 function SearchBox() {
  return (
    <div className='searchBody'>
      {/* Sport field */}
      <div className='field1'>
        <center><span className='f1'>Sport</span></center>
        <center>
          <select className='selectbox'>
            <option value=''>Select Sport</option>
            <option value='football'>Inbox Cricket</option>
            <option value='basketball'>Basketball</option>
            <option value='tennis'>Tennis</option>
            <option value='tennis'>Badminton</option>
          </select>
        </center>
      </div>

      {/* Location field */}

      <div className='test'>
      <div className='field2'>
        <center><span className='f1'>Location</span></center>
      </div>

      {/* Date field */}
      <div className='field3'>
        <center><span className='f1'>Date</span></center>
        <center>
          <input type='date' className='datebox' min={new Date().toISOString().split('T')[0]} max='2026-12-31' />
        </center>
      </div>

      {/* Time field */}
      <div className='field4'>
        <center><span className='f1'>Time</span></center>
        <center>
          <select className='selectbox'>
            <option value=''>Select Time</option>
            <option value='football'>8.00 a.m</option>
            <option value='basketball'>9.00 a.m</option>
            <option value='tennis'>10.00 a.m</option>
            <option value='tennis'>11.00 a.m</option>
          </select>
        </center>
      </div>

      {/* Duration field */}
      <div className='field5'>
        <center><span className='f1'>Duration</span></center>
        <center>
        <select className='selectbox'>
            <option value=''>Select Duration</option>
            <option value='football'>0.5 Hour</option>
            <option value='basketball'> 1 Hour</option>
            <option value='tennis'>1.5 Hour</option>
            <option value='tennis'>2 Hour</option>
            <option value='tennis'>2.5 Hour</option>
            <option value='tennis'>3 Hour</option>
          </select>
        </center>
      </div>
      
      {/* Search button */}
      <div className='search'>
        <center><span className='s'>Search</span></center>
        <SearchIcon className='sicon' sx={{ background: "#1C5555", color: '#FFFFFF' }} />
      </div>
      </div>
    </div>
  )
}
export default SearchBox;
