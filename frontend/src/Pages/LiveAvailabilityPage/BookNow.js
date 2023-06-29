import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookNow.css';

export default function BookNow() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');

  const highlightCurrentDate = (date) => {
    const currentDate = new Date();
    return date.toDateString() === currentDate.toDateString();
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
      console.log('Booking submitted');
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
            highlightDates={highlightCurrentDate}
          />
        </div>
        <div className='sdurate'>Select a Start Time and Duration</div>
        <div className='dropdownContainer'>
          <select
            className='dropdown1'
            defaultValue='court1'
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value='court1'>None</option>
            <option value='court1'>None</option>
            <option value='07.00 am'>07.00 am</option>
            <option value='07.30 am'>07.30 am</option>
            <option value='08.00 am'>08.00 am</option>
            <option value='08.30 am'>08.30 am</option>
            <option value='09.00 am'>09.00 am</option>
            <option value='09.30 am'>09.30 am</option>
            <option value='10.00 am'>10.00 am</option>
            <option value='10.30 am'>10.30 am</option>
            <option value='11.00 am'>11.00 am</option>
            <option value='11.30 am'>11.30 am</option>
            <option value='12.00 pm'>12.00 pm</option>
            <option value='12.30 pm'>12.30 pm</option>
            <option value='01.00 pm'>01.00 pm</option>
            <option value='01.30 pm'>01.30 pm</option>
            <option value='02.00 pm'>02.00 pm</option>
            <option value='02.30 pm'>02.30 pm</option>
            <option value='03.00 pm'>03.00 pm</option>
            <option value='03.30 pm'>03.30 pm</option>
            <option value='04.00 pm'>04.00 pm</option>
            <option value='04.30 pm'>04.30 pm</option>
            <option value='05.00 pm'>05.00 pm</option>
            <option value='05.30 pm'>05.30 pm</option>
            <option value='06.00 pm'>06.00 pm</option>
            <option value='06.30 pm'>06.30 pm</option>
            <option value='07.00 pm'>07.00 pm</option>
            <option value='07.30 pm'>07.30 pm</option>
            <option value='08.00 pm'>08.00 pm</option>
            <option value='08.30 pm'>08.30 pm</option>
            <option value='09.00 pm'>09.00 pm</option>
          </select>
          <select
            className='dropdown2'
            defaultValue='court1'
            onChange={(e) => setSelectedDuration(e.target.value)}
          >
            <option value='court1'>None</option>
            <option value='option1'>1 Hour</option>
            <option value='option2'>1.5 Hour</option>
            <option value='option2'>2 Hour</option>
            <option value='option2'>2.5 Hour</option>
            <option value='option2'>3 Hour</option>
            <option value='option2'>3.5 Hour</option>
            <option value='option7'>4 Hour</option>
          </select>
        </div>
        <div className='scourt'>Select a Preferred Court</div>
        <select
          className='dropdown3'
          defaultValue='court1'
          onChange={(e) => setSelectedCourt(e.target.value)}
        >
          <option value='court1'>None</option>
          <option value='court1'>Court 1</option>
          <option value='court2'>Court 2</option>
          <option value='court3'>Court 3</option>
          <option value='court4'>Court 4</option>
        </select>
        <button className={`bookButton ${!isFormValid() ? 'disabled' : ''}`} onClick={handleBookClick} disabled={!isFormValid()}>
          <span className='bbuttonText'>Book</span>
        </button>
      </div>
    </div>
  );
}
