import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BookSports from './BookSports';
import './BookSports.css';
import './Arenas.css';
import SearchBox from './SearchBox';

const URL = 'http://localhost:8080/arenas/';

const fetchArenas = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Arenas = () => {
  const [arenas, setArenas] = useState([]);
  const [filteredArenas, setFilteredArenas] = useState([]);

  useEffect(() => {
    fetchArenas().then((data) => {
      setArenas(data.arenas);
      setFilteredArenas(data.arenas); // Set initial filtered arenas to all arenas
    });
  }, []);

  const handleSearch = ({ sport, location }) => {
    if (sport && location) {
      const filtered = arenas.filter((arena) => {
        return arena.sport === sport && arena.location === location;
      });
      setFilteredArenas(filtered);
    } else {
      setFilteredArenas(arenas); // Show all arenas if no filters applied
    }
  };

  return (
    <div>
      <div className="search-part">
        <SearchBox onSearch={handleSearch} />
      </div>
      <div className="sports">
        <ul>
          {filteredArenas.map((arena, i) => (
            <div className="book" key={i}>
              <BookSports arena={arena} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Arenas;
