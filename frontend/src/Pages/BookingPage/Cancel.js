import React from 'react';
import './Cancel.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function Cancel() {
  return (
    <div>
      {/* First Frame */}
      <div className='Frame'>
        <img className='img1' src='cricket-lanes.jpg' alt='playground' />
        <span className='topic1'>KHR Indoor Cricket</span>
        <span className='id'>ID : 5940107005302237590</span>
        <span className='date'>
          <CalendarMonthIcon /> March 26, 2023
        </span>
        <span className='time'>
          <ScheduleIcon /> 11.30 a.m. - 1.30 p.m.
        </span>
        <div className='gcode'></div>
        <div className='gcircle'><span className='active'>Active</span></div>
      </div>

      {/* Second Frame */}
      <div className='Frame2'>
        <img className='img1' src='cricket-lanes.jpg' alt='playground' />
        <span className='topic1'>NI Sports Center</span>
        <span className='id'>ID : 5940107005302237590</span>
        <span className='date'>
          <CalendarMonthIcon /> March 26, 2023
        </span>
        <span className='time'>
          <ScheduleIcon /> 11.30 a.m. - 1.30 p.m.
        </span>
        <div className='ycode'></div>
        <div className='ycircle'><span className='active'>Past</span></div>
      </div>

      {/* Third Frame */}
      <div className='Frame3'>
        <img className='img1' src='cricket-lanes.jpg' alt='playground' />
        <span className='topic1'>CJD Sports</span>
        <span className='id'>ID : 5940107005302237590</span>
        <span className='date'>
          <CalendarMonthIcon /> March 26, 2023
        </span>
        <span className='time'>
          <ScheduleIcon /> 11.30 a.m. - 1.30 p.m.
        </span>
      </div>

      {/* Red Circle and 'Cancelled' text */}
      <div className='rcode'></div>
      <div className='rcircle'><span className='active'>Cancelled</span></div>
    </div>
  );
}
