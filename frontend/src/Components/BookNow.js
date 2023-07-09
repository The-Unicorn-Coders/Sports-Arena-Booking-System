import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookNow.css';
import axios from 'axios';

export default function BookNow() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');
  const [name, setName] = useState({ name: "Mary" });


  const highlightCurrentDate = (date) => {
    const currentDate = new Date();
    return date >= currentDate;
  };

  const isFormValid = () => {
    return (
      selectedDate !== null &&
      selectedTime !== '' &&
      selectedDuration !== '' &&
      selectedCourt !== ''
    );
  };

  const handleBookClick = () => {
    if (isFormValid()) {
      // Perform booking or submit the form
      const formData = {
        selectedDate,
        selectedTime,
        selectedDuration,
        selectedCourt,
        name: name.name
      };

      axios
        .post('/api/data', formData)
        .then(response => {
          console.log('Booking submitted');
          setSelectedDate(null);
          setSelectedTime('');
          setSelectedDuration('');
          setSelectedCourt('');
          setName('');


          // Redirect to the booking page and pass the selected data as query parameters
          navigate(`/payment?selectedTime=${selectedTime}&selectedDate=${selectedDate}&selectedDuration=${selectedDuration}&selectedCourt=${selectedCourt}`);
        })
        .catch(error => {
          console.log('Error submitting booking:', error);
        });
    } else {
      console.log('Please fill all the required fields');
    }
  };

  

  return (
    <div>
      <div className='frame'>
        <div className='bTopic'>Make a Booking</div>
        <div className='bline'></div> {/* Added line */}
        <div className='sdate'>
          <span>Select a Date</span>
          <DatePicker
            className='date'
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            placeholderText='Select a date'
            filterDate={highlightCurrentDate}
          />
        </div>
        <div className='sdurate'>Select a Start Time and Duration</div>
        <div className='dropdownContainer'>
          <select
            className='dropdown1'
            defaultValue='court1'
            onChange={(e) => setSelectedTime(e.target.value)}
          >
                        <option value='09:00:00'>09.00 am</option>
                        <option value='09:30:00'>09.30 am</option>
                        <option value='10:00:00'>10.00 am</option>
                        <option value='10:30:00'>10.30 am</option>
                        <option value='11:00:00'>11.00 am</option>
                        <option value='11:30:00'>11.30 am</option>
                        <option value='12:00:00'>12.00 noon</option>
                        <option value='12:30:00'>12.30 pm</option>
                        <option value='13:00:00'>01.00 pm</option>
                        <option value='13:30:00'>01.30 pm</option>
                        <option value='14:00:00'>02.00 pm</option>
                        <option value='14:30:00'>02.30 pm</option>
                        <option value='15:00:00'>03.00 pm</option>
                        <option value='15:30:00'>03.30 pm</option>
                        <option value='15:30:00'>04.00 pm</option>
                        <option value='15:30:00'>04.30 pm</option>
                        <option value='15:30:00'>05.00 pm</option>
                        <option value='15:30:00'>05.30 pm</option>

 
            {/* Rest of the options */}
          </select>
          <select
            className='dropdown2'
            defaultValue='court1'
            onChange={(e) => setSelectedDuration(e.target.value)}
          >
            <option value='court1'>None</option>
            <option value='1'>1 Hour</option>
            <option value='1.5'>1.5 Hour</option>
            <option value='2'>2 Hour</option>
            <option value='2.5'>2.5 Hour</option>
            <option value='3'>3 Hour</option>
            <option value='3.5'>3.5 Hour</option>
            <option value='4'>4 Hour</option>
            <option value='4.5'>4.5 Hour</option>
            {/* Rest of the options */}
          </select>
        </div>
        <div className='scourt'>Select a Preferred Court</div>
        <select
          className='dropdown3'
          defaultValue='court1'
          onChange={(e) => setSelectedCourt(e.target.value)}
        >
          <option value='Court'>None</option>
          <option value='Court 1'>Court 1</option>
          <option value='Court 2'>Court 2</option>
          <option value='Court 3'>Court 3</option>
          <option value='Court 4'>Court 4</option>
          {/* Rest of the options */}
        </select>
        <button className={`bookButton ${!isFormValid() ? 'disabled' : ''}`} onClick={handleBookClick} disabled={!isFormValid()}  style={{ 

    border: 'none', 
    cursor: 'pointer',
    // Add hover styles
    ':hover': {
      backgroundColor: 'black',
      color: 'black',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    }
  }}>
          <span className='bbuttonText'>Book</span>
        </button>
      </div>
    </div>
  );
}
