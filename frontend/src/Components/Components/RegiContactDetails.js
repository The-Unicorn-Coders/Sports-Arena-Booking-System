import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../Styles/RegiContactDetails.css";

const RegiContactDetails = () => {
  return (
    <div>
      <div
        className="pictureSide"
        style={{
          top: "20px",
          marginBottom: "20px",
          marginLeft: "320px",
        }}
      >
        <img
          className="Picture1"
          src="Group 15.png"
          alt="playground"
          style={{ width: "400px", height: "530px" }}
        />
        <img
          className="Picture2"
          src="pngkey 1.png"
          alt="playground"
          style={{ width: "250px", height: "250px" }}
        />
        <img className="Picture3" src="explore .png" alt="playground" />
        <img className="Picture4" src="Arena Logo .png" alt="arenalogo" />
      </div>
      <div
        className="loginSide"
        style={{
          backgroundColor: "#eeeeee",
          width: "350px",
          height: "450px",
          marginTop: "20px",
          marginBottom: "20px",
          marginRight: "220px",
        }}
      >
        <div className="logContain">
          {/* Welcome message */}
          <h2 className="test">Contact Details</h2>
          <label className="test2">
            Hello there, kindly give us your personal contact details and
            <lable className="test3">
              we'll send you a link to a registeras an our customer.
            </lable>
          </label>
        </div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="contactnum"
          label="Contact Number"
          name="contact number"
          autoComplete="Contact"
          placeholder="Contact Number"
          autoFocus
          className="Contact"
          sx={{
            width: { sm: 140, md: 330 },
            "& .MuiInputBase-root": {
              height: 45,
            },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phonenumber"
          label="Phone number"
          name="email"
          autoComplete="email"
          autoFocus
          placeholder="Phone Number"
          className="Phone"
          sx={{
            width: { sm: 140, md: 330 },
            "& .MuiInputBase-root": {
              height: 45,
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          className="btn"
          sx={{
            width: { sm: 70, md: 330 },
            "&.MuiInputBase-root": {
              height: 65,
            },
            backgroundColor: "#1C5555", // Set the background color
            "&:hover": {
              backgroundColor: "#1C5555", // Set the hover color
            },
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RegiContactDetails;
