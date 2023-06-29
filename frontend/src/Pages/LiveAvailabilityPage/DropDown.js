import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DropDown.css';

export default function SportCourtSelection() {
  const [activeButton, setActiveButton] = useState(null);
  const [courtOptions, setCourtOptions] = useState([]);

  const handleSportSelection = (buttonName) => {
    setActiveButton(buttonName);
    setCourtOptions(getCourtOptions(buttonName));
  };

  const getCourtOptions = (sport) => {
    switch (sport) {
      case 'Indoor-Cricket':
        return ['Court 01', 'Court 02', 'Court 03', 'Court 04'];
      case 'Swimming':
        return ['Court 05', 'Court 06'];
      case 'Table-Tennis':
        return ['Court 07', 'Court 08'];
      case 'Billiard':
        return ['Court 09'];
      default:
        return [];
    }
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const options = { day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div className="sport-container">
        <div className="sport-buttons">
          <Button
            onClick={() => handleSportSelection('Indoor-Cricket')}
            style={{
              backgroundColor: activeButton === 'Indoor-Cricket' ? '#1c5555' : '#fff',
              color: activeButton === 'Indoor-Cricket' ? '#fff' : '#1c5555',
              position: 'absolute',
              top: '-80px',
              left: '0px',
              width: '200px',
              height: '50px',
              borderRadius: '25px',
              border: activeButton !== 'Indoor-Cricket' ? '3px solid #1c5555' : 'none',
            }}
          >
            Indoor-Cricket
          </Button>
          <Button
            onClick={() => handleSportSelection('Swimming')}
            style={{
              backgroundColor: activeButton === 'Swimming' ? '#1c5555' : '#fff',
              color: activeButton === 'Swimming' ? '#fff' : '#1c5555',
              position: 'absolute',
              top: '-80px',
              left: '206px',
              width: '200px',
              height: '50px',
              borderRadius: '25px',
              border: activeButton !== 'Swimming' ? '3px solid #1c5555' : 'none',
            }}
          >
            Swimming
          </Button>
          <Button
            onClick={() => handleSportSelection('Table-Tennis')}
            style={{
              backgroundColor: activeButton === 'Table-Tennis' ? '#1c5555' : '#fff',
              color: activeButton === 'Table-Tennis' ? '#fff' : '#1c5555',
              position: 'absolute',
              top: '-80px',
              left: '412px',
              width: '200px',
              height: '50px',
              borderRadius: '25px',
              border: activeButton !== 'Table-Tennis' ? '3px solid #1c5555' : 'none',
            }}
          >
            Table-Tennis
          </Button>
          <Button
            onClick={() => handleSportSelection('Billiard')}
            style={{
              backgroundColor: activeButton === 'Billiard' ? '#1c5555' : '#fff',
              color: activeButton === 'Billiard' ? '#fff' : '#1c5555',
              position: 'absolute',
              top: '-80px',
              left: '618px',
              width: '200px',
              height: '50px',
              borderRadius: '25px',
              border: activeButton !== 'Billiard' ? '3px solid #1c5555' : 'none',
            }}
          >
            Billiard
          </Button>
        </div>
      </div>
      <div className="court-container">
        <div className="court-date">
          <label className="gap">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="custom-datepicker"
          />
          {selectedDate && (
            <div className="selected-date" style={{ color: '#1C5555' }}>
              #{formatDate(selectedDate)}
            </div>
          )}
        </div>
        <div className="court-type">
          <label>Courts</label>
          <select>
            {courtOptions.map((court, index) => (
              <option key={index} value={`court${index + 1}`}>
                {court}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
