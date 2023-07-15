import React, { useState } from 'react';
import './SearchBox.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBox({ onSearch }) {
  const [sport, setSport] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const isSearchButtonDisabled = !(sport && location && date && time);

  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSearch = () => {
    if (!isSearchButtonDisabled) {
      onSearch({
        sport,
        location,
        date,
        time
      });
    }
  };

  return (
    <div className="searchBody">
      <div className="field1">
        <center>
          <span className="f1">Sport</span>
        </center>
        <center>
          <select className="selectbox" value={sport} onChange={handleSportChange}>
            <option value="">Select Sport</option>
            <option value="football">Inbox Cricket</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="badminton">Badminton</option>
          </select>
        </center>
      </div>

      <div className="test">
        <div className="field2">
          <center>
            <span className="f1">Location</span>
          </center>
          <center>
            <select className="selectbox" value={location} onChange={handleLocationChange}>
              <option value="">Select Location</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Kaluthara">Kaluthara</option>
            </select>
          </center>
        </div>

        <div className="field3">
          <center>
            <span className="f1">Date</span>
          </center>
          <center>
            <input
              type="date"
              className="datebox"
              min={new Date().toISOString().split('T')[0]}
              max="2026-12-31"
              value={date}
              onChange={handleDateChange}
            />
          </center>
        </div>

        <div className="field4">
          <center>
            <span className="f1">Time</span>
          </center>
          <center>
            <select className="selectbox" value={time} onChange={handleTimeChange}>
              <option value="">Select Time</option>
              {Array.from({ length: 24 }, (_, i) => {
                const hour = i === 0 ? 12 : i;
                const amPm = i < 12 ? 'a.m' : 'p.m';
                return (
                  <option key={i} value={`${hour}${amPm}`}>
                    {`${hour}.00 ${amPm}`}
                  </option>
                );
              })}
            </select>
          </center>
        </div>

        <div
          className="search"
          style={{
            backgroundColor: isSearchButtonDisabled ? '#2c8383' : '',
          }}
          onClick={handleSearch}
        >
          <div
            className="searchIconContainer"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '64px', height: '64px' }}
          >
            <SearchIcon style={{ fontSize: '64px', color: 'white' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
