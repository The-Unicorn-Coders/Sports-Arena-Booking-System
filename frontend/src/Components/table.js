import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../Styles/table.css";

const SportsTable = () => {
  const [sports, setSports] = useState({
    "Indoor Cricket": {
      available: false,
      price: "",
    },
    Badminton: {
      available: false,
      price: "",
    },
    Fustal: {
      available: false,
      price: "",
    },
    "Table Tennis": {
      available: false,
      price: "",
    },
    Billiard: {
      available: false,
      price: "",
    },
    Rowing: {
      available: false,
      price: "",
    },
    Swimming: {
      available: false,
      price: "",
    },
    Basketball: {
      available: false,
      price: "",
    },
    "Volley Ball": {
      available: false,
      price: "",
    },
  });

  const handleSportAvailabilityChange = (sport) => (event) => {
    setSports((prevSports) => ({
      ...prevSports,
      [sport]: {
        ...prevSports[sport],
        available: event.target.checked,
      },
    }));
  };

  const handlePriceChange = (sport) => (event) => {
    setSports((prevSports) => ({
      ...prevSports,
      [sport]: {
        ...prevSports[sport],
        price: event.target.value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions when the form is submitted
    // For example, you can access the updated sports data using the 'sports' state variable
    console.log(sports);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="table1" style={{ borderSpacing: "8px" }}>
        <thead>
          <tr>
            <th>Available Sports</th>
            <th></th>
            <th className="spacing1"> Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(sports).map(([sport, details]) => (
            <tr key={sport}>
              <td>{sport}</td>
              <td>
                <input
                  type="checkbox"
                  checked={details.available}
                  onChange={handleSportAvailabilityChange(sport)}
                />
              </td>
              <td>
                {details.available && (
                  <TextField
                    required
                    type="text"
                    value={details.price}
                    onChange={handlePriceChange(sport)}
                    placeholder="Price per hour"
                    sx={{
                      width: "130px", // Specify the desired width
                      "& .MuiInputBase-root": {
                        height: "23px", // Specify the desired height
                      },
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default SportsTable;
