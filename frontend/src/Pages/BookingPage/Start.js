import React, { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';

function Start() {
  // Set initial state for selectedOption and create function to update it
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    // Update selectedOption when dropdown value changes
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* Render heading */}
      <div>
        <span
          style={{
            position: 'absolute',
            width: '312px',
            height: '42px',
            left: '128px',
            top: '160px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '32px', // Increased font size to 36px
            lineHeight: '39px',
            color: '#1C5555',
          }}
        >
          Customer Bookings
        </span>
      </div>
      {/* Render dropdown with options and update selectedOption on change */}
      <select
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '3px',
          position: 'absolute',
          width: '207px',
          height: '56px',
          left: '128px',
          top: '228px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px', // Increased font size to 20px
          lineHeight: '24px',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '0.15px',
          color: '#1C5555',
          flex: 'none',
          order: 1,
          flexGrow: 1,
          zIndex: 1,
        }}
        value={selectedOption}
        onChange={handleSelect}
      >
        <option value=""><b>All Bookings</b></option>
        <option value="option1">Cancel Bookings</option>
        <option value="option2">Active Bookings</option>
        <option value="option3">Past Bookings</option>
      </select>
      <p>
        All Bookings {selectedOption}
      </p>
      <div
        style={{
          position: 'absolute',
          width: '1150px',
          height: '180px',
          left: '128px',
          top: '321px',
          background: '#DEDEDE',
          borderRadius: '10px'
        }}
      >
        <img
          className='img1'
          src='cricket-lanes.jpg'
          alt='playground'
          style={{
            position: 'absolute',
            width: '396px',
            height: '180px',
            left: '0px',
            borderRadius: '10px 0px 0px 10px'
          }}
        />
        <span
          className='topic1'
          style={{
            position: 'absolute',
            width: '298px',
            height: '39px',
            left: '553px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#1C5555',
            zIndex: '1'
          }}
        >
          KHR Indoor Cricket
        </span>
        <span
          className='id'
          style={{
            position: 'absolute',
            width: '304px',
            height: '21px',
            left: '553px',
            top: '45px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '143%',
            letterSpacing: '0.17px',
            color: '#1C5555'
          }}
        >
          ID : 5940107005302237590
        </span>
        <span
          className='date'
          style={{
            position: 'absolute',
            width: '304px',
            height: '21px',
            left: '553px',
            top: '85px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#1C5555',
            flex: 'none',
            order: '1',
            flexGrow: '0'
          }}
        >
          <CalendarMonthIcon /> March 26, 2023
        </span>
        <span
          className='time'
          style={{
            position: 'absolute',
            width: '300px',
            height: '21px',
            left: '553px',
            top: '130px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#1C5555'
          }}
        >
          <ScheduleIcon /> 11.30 a.m. - 1.30 p.m.
        </span>
        <div
          className='gcode'
          style={{
            position: 'absolute',
            width: '12px',
            height: '180px',
            left: '1140px',
            background: '#36CE00',
            borderRadius: '0px 10px 10px 0px'
          }}
        ></div>
        <div
          className='gcircle'
          style={{
            position: 'absolute',
            width: '16px',
            height: '16px',
            left: '1040px',
            top: '7px',
            background: '#36CE00'
          }}
        >
          <span
            className='active'
            style={{
              position: 'absolute',
              width: '69px',
              height: '21px',
              left: '20px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '22px',
              color: '#1C5555'
            }}
          >
            Active
          </span>
        </div>
      </div>

      {/* Second Frame */}
      <div
        className='Frame2'
        style={{
          position: 'absolute',
          width: '1150px',
          height: '180px',
          left: '128px',
          top: '538px',
          background: '#DEDEDE',
          borderRadius: '10px'
        }}
      >
        <img
          className='img1'
          src='cricket-lanes.jpg'
          alt='playground'
          style={{
            position: 'absolute',
            width: '396px',
            height: '180px',
            left: '0px',
            borderRadius: '10px 0px 0px 10px'
          }}
        />
        <span
          className='topic1'
          style={{
            position: 'absolute',
            width: '298px',
            height: '39px',
            left: '553px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#1C5555',
            zIndex: '1'
          }}
        >
          NI Sports Center
        </span>
        <span
          className='id'
          style={{
            position: 'absolute',
            width: '304px',
            height: '21px',
            left: '553px',
            top: '45px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '143%',
            letterSpacing: '0.17px',
            color: '#1C5555'
          }}
        >
          ID : 5940107005302237590
        </span>
        <span
          className='date'
          style={{
            position: 'absolute',
            width: '304px',
            height: '21px',
            left: '553px',
            top: '85px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#1C5555',
            flex: 'none',
            order: '1',
            flexGrow: '0'
          }}
        >
          <CalendarMonthIcon /> March 26, 2023
        </span>
        <span
          className='time'
          style={{
            position: 'absolute',
            width: '300px',
            height: '21px',
            left: '553px',
            top: '130px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#1C5555'
          }}
        >
          <ScheduleIcon /> 11.30 a.m. - 1.30 p.m.
        </span>
        <div
          className='ycode'
          style={{
            position: 'absolute',
            width: '12px',
            height: '180px',
            left: '1140px',
            background: '#E8C306',
            borderRadius: '0px 10px 10px 0px'
          }}
        ></div>
        <div
          className='ycircle'
          style={{
            position: 'absolute',
            width: '16px',
            height: '16px',
            left: '1040px',
            top: '7px',
            background: '#E8C306'
          }}
        >
          <span
            className='active'
            style={{
              position: 'absolute',
              width: '69px',
              height: '21px',
              left: '20px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '22px',
              color: '#1C5555'
            }}
          >
            Past
          </span>
        </div>
      </div>

      {/* Third Frame */}
      <div
        className='Frame3'
        style={{
          position: 'absolute',
          width: '1150px',
          height: '180px',
          left: '128px',
          top: '755px',
          background: '#DEDEDE',
          borderRadius: '10px'
        }}
      >
        <img
          className='img1'
          src='cricket-lanes.jpg'
          alt='playground'
          style={{
            position: 'absolute',
            width: '396px',
            height: '180px',
            left: '0px',
            borderRadius: '10px 0px 0px 10px'
          }}
        />
        <span
          className='topic1'
          style={{
            position: 'absolute',
            width: '298px',
            height: '39px',
            left: '553px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#1C5555',
            zIndex: '1'
          }}
        >
          CJD Sports
        </span>
        <span
          className='id'
          style={{
            position: 'absolute',
            width: '304px',
            height: '21px',
            left: '553px',
            top: '45px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '143%',
            letterSpacing: '0.17px',
            color: '#1C5555'
          }}
        >
          ID : 5940107005302237590
        </span>
        <span
          className='date'
          style={{
            position: 'absolute',
            width: '304px',
            height: '21px',
            left: '553px',
            top: '85px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#1C5555',
            flex: 'none',
            order: '1',
            flexGrow: '0'
          }}
        >
          <CalendarMonthIcon /> March 26, 2023
        </span>
        <span
          className='time'
          style={{
            position: 'absolute',
            width: '300px',
            height: '21px',
            left: '553px',
            top: '130px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#1C5555'
          }}
        >
          <ScheduleIcon /> 11.30 a.m. - 1.30 p.m.
        </span>
        <div
          className='rcode'
          style={{
            position: 'absolute',
            width: '12px',
            height: '180px',
            left: '1140px',
            background: '#FF0000',
            borderRadius: '0px 10px 10px 0px'
          }}
        ></div>
        <div
          className='rcircle'
          style={{
            position: 'absolute',
            width: '16px',
            height: '16px',
            left: '1040px',
            top: '7px',
            background: '#FF0000'
          }}
        >
          <span
            className='active'
            style={{
              position: 'absolute',
              width: '69px',
              height: '21px',
              left: '20px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '22px',
              color: '#1C5555'
            }}
          >
            Cancelled
          </span>
        </div>
      </div>
    </div>
  );
}

export default Start;
