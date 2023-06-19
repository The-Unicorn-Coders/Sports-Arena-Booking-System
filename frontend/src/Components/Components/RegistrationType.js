import React from "react";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

import "./RegistrationType.css";
const handleClick = () => {
  // Handle the button click event
  console.log("People button clicked");
};

const SignInContact = () => {
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
          marginRight: "250px",
        }}
      >
        <div className="logContain">
          {/* Welcome message */}
          <h2 className="test">Registration Type</h2>
          <label className="test2">
            Select one of registration type continue the registration procedure
          </label>
        </div>
        <div className="icon-container">
          <IconButton
            onClick={handleClick}
            aria-label="People"
            style={{
              color: "#1C5555",
              fontSize: "24px",
              width: "60px",
              height: "60px",
              top: "205px",
              left: "50px",
              right: "140px",
            }}
          >
            <PeopleAltIcon />
          </IconButton>
          <Button
            type="submit"
            variant="contained"
            className="btn"
            sx={{
              width: { sm: 70, md: 160 },
              "&.MuiInputBase-root": {
                height: 43,
              },
              backgroundColor: "#1C5555", // Set the background color
              "&:hover": {
                backgroundColor: "#1C5555", // Set the hover color
              },
            }}
          >
            Ground Owner
          </Button>

          <IconButton
            onClick={handleClick}
            aria-label="People"
            style={{
              color: "#1C5555",
              fontSize: "32px",
              width: "60px",
              height: "60px",
              top: "120px",
              left: "-175px",
            }}
          >
            <PersonIcon />
          </IconButton>
          <Button
            type="submit"
            variant="contained"
            className="btn1"
            sx={{
              width: { sm: 70, md: 160 },
              "&.MuiInputBase-root": {
                height: 43,
              },
              backgroundColor: "#1C5555", // Set the background color
              "&:hover": {
                backgroundColor: "#1C5555", // Set the hover color
              },
            }}
          >
            Customer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInContact;
