import React, { useState, useEffect } from 'react';
import './OpeningHours.css';
import axios from 'axios';

{/*export default function OpeningHours() {
  const [openingTime, setOpeningTime] = useState([]);
  const [selectedArena, setSelectedArena] = useState('');

  const BASE_URL = 'http://localhost:8081';

  useEffect(() => {
    const fetchOpeningTime = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/openingTimes`);

        setOpeningTime(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOpeningTime();
  }, []);

  const getOpeningHoursByArenaName = (arenaName) => {
    const arena = openingTime.find((item) => item.arenaName === arenaName);
    if (arena) {
      return arena.openingHours.map((time, index) => (
        <span key={index} className='time-slot'>
          {time.day}&nbsp;&nbsp;&nbsp;{time.startTime} - {time.endTime}
        </span>
      ));
    }
    return null;
  };

  const handleArenaChange = (event) => {
    setSelectedArena(event.target.value);
  };

  return (
    <div>
      <span className='topic2'>Opening Hours</span>
      <select className='dropdown' value={selectedArena} onChange={handleArenaChange}>
        <option value='Community Center'>Community Center</option>
        <option value='Youth Hub'>Youth Hub</option>
        <option value='Sports Junction'>Sports Junction</option>
        <option value='Community Gathering Place'>Community Gathering Place</option>
        <option value='Recreation Hub'>Recreation Hub</option>
        <option value='Arts and Culture Center'>Arts and Culture Center</option>
        {openingTime.map((arena, index) => (
          <option key={index} value={arena.name}>
            {arena.name}
          </option>
        ))}
      </select>
      {selectedArena && (
        <div>
          <h3>{selectedArena}</h3>
          {getOpeningHoursByArenaName(selectedArena)}
        </div>
      )}
    </div>
  );
}*/}


export default function OpeningHours() {
  const [openingTime, setOpeningTime] = useState([]);
  const [selectedArena, setSelectedArena] = useState('');

  const BASE_URL = 'http://localhost:8081';

  useEffect(() => {
    const fetchOpeningTime = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/openingTimes`);
        setOpeningTime(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOpeningTime();
  }, []);

  const getOpeningHoursByArenaName = (arenaName) => {
    switch (arenaName) {
      case 'Community Center':
        return (
          <div className='time'>
            <span className='time-slot'>Mon&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Tue&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Wed&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Thu&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Sat&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Sun&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
          </div>
        );
      case 'Youth Hub':
        return (
          <div className='time'>
            <span className='time-slot'>Mon&nbsp;&nbsp;&nbsp;8.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Tue&nbsp;&nbsp;&nbsp;&nbsp;8.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Wed&nbsp;&nbsp;&nbsp;8.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Thu&nbsp;&nbsp;&nbsp;&nbsp;8.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Sat&nbsp;&nbsp;&nbsp;&nbsp;8.00am&nbsp;-&nbsp;9.00pm</span>
            <span className='time-slot'>Sun&nbsp;&nbsp;8.00am&nbsp;-&nbsp;9.00pm</span>
          </div>
        );
        case 'Sports Junction':
          return (
            <div className='time'>
              <span className='time-slot'>Mon&nbsp;&nbsp;&nbsp;6.00am&nbsp;-&nbsp;9.00pm</span>
              <span className='time-slot'>Tue&nbsp;&nbsp;&nbsp;&nbsp;6.00am&nbsp;-&nbsp;9.00pm</span>
              <span className='time-slot'>Wed&nbsp;&nbsp;&nbsp;6.00am&nbsp;-&nbsp;9.00pm</span>
              <span className='time-slot'>Thu&nbsp;&nbsp;&nbsp;&nbsp;6.00am&nbsp;-&nbsp;9.00pm</span>
              <span className='time-slot'>Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
              <span className='time-slot'>Sat&nbsp;&nbsp;&nbsp;&nbsp;6.00am&nbsp;-&nbsp;9.00pm</span>
              <span className='time-slot'>Sun&nbsp;&nbsp;6.00am&nbsp;-&nbsp;9.00pm</span>
            </div>
          );
          case 'Community Gathering Place':
            return (
              <div className='time'>
                <span className='time-slot'>Mon&nbsp;&nbsp;&nbsp;9.00am&nbsp;-&nbsp;9.00pm</span>
                <span className='time-slot'>Tue&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                <span className='time-slot'>Wed&nbsp;&nbsp;&nbsp;9.00am&nbsp;-&nbsp;9.00pm</span>
                <span className='time-slot'>Thu&nbsp;&nbsp;&nbsp;&nbsp;9.00am&nbsp;-&nbsp;9.00pm</span>
                <span className='time-slot'>Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.00am&nbsp;-&nbsp;9.00pm</span>
                <span className='time-slot'>Sat&nbsp;&nbsp;&nbsp;&nbsp;9.00am&nbsp;-&nbsp;9.00pm</span>
                <span className='time-slot'>Sun&nbsp;&nbsp;9.00am&nbsp;-&nbsp;9.00pm</span>
              </div>
            );
            case 'Recreation Hub':
              return (
                <div className='time'>
                  <span className='time-slot'>Mon&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                  <span className='time-slot'>Tue&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                  <span className='time-slot'>Wed&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                  <span className='time-slot'>Thu&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                  <span className='time-slot'>Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                  <span className='time-slot'>Sat&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                  <span className='time-slot'>Sun&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
                </div>
              );
      // Add more cases for other arenas if needed
      default:
        return null;
    }
  };

  const handleArenaChange = (event) => {
    setSelectedArena(event.target.value);
  };

  return (
    <div>
      <span className='topic2'>Opening Hours</span>
      <select className='dropdown' value={selectedArena} onChange={handleArenaChange}>
        <option value=''>Select an arena</option>
        <option value='Community Center'>Community Center</option>
        <option value='Youth Hub'>Youth Hub</option>
        <option value='Sports Junction'>Sports Junction</option>
        <option value='Community Gathering Place'>Community Gathering Place</option>
        <option value='Recreation Hub'>Recreation Hub</option>
        {/* Add more options for other arenas if needed */}
      </select>
      {selectedArena && (
        <div>
          <h3>{selectedArena}</h3>
          {getOpeningHoursByArenaName(selectedArena)}
        </div>
      )}
      
    </div>
  );
}

