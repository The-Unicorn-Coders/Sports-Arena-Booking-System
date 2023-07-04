import React, { useState, useEffect } from 'react';
import './OpeningHours.css';
import axios from 'axios';

export default function OpeningHours() {
  const [openingTime, setOpeningTime] = useState([]);

  const BASE_URL = 'http://localhost:8081';

  useEffect(() => {
    const fetchOpeningTime = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/arenas`);

        setOpeningTime(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOpeningTime();
  }, []);

  const getOpeningHoursByArenaName = (arenaName) => {
    const arena = openingTime.find((item) => item.name === arenaName);
    if (arena) {
      return arena.openingHours.map((time, index) => (
        <span key={index} className='time-slot'>{time.day}&nbsp;&nbsp;&nbsp;{time.startTime} - {time.endTime}</span>
      ));
    }
    return null;
  };

  return (
    <div>
      <span className='topic2'>Opening Hours</span>
      {openingTime.map((arena, index) => (
        <div key={index}>
          <h3>{arena.name}</h3>
          {getOpeningHoursByArenaName(arena.name)}
        </div>
      ))}
    </div>
  );
}
