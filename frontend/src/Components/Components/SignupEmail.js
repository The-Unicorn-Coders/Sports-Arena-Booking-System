import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { Avatar, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import "../Styles/SignupEmail.css";

const SignInEmail = () => {
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="icon"
          >
            <Avatar
              sx={{
                bgcolor: "#D1FAE5",
                position: "relative",
                left: "-130px", // Adjust the left value to move the icon horizontally
                top: "4px", // Adjust the top value to move the icon vertically
              }}
            >
              <CheckIcon sx={{ fontSize: 28, color: "#1C5555" }} />
            </Avatar>
          </Box>
          <h2 className="test">Check your email inbox</h2>
          <Box sx={{ position: "relative", top: 20, right: -19 }}>
            <EmailIcon sx={{ fontSize: 23, color: "#1E293B" }} />
          </Box>

          <Button
            type="submit"
            variant="contained"
            className="btn"
            sx={{
              width: { sm: 70, md: 300 },
              "&.MuiInputBase-root": {
                height: 65,
              },
              backgroundColor: "#1C5555", // Set the background color
              "&:hover": {
                backgroundColor: "#1C5555", // Set the hover color
              },
            }}
          >
            Resend
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInEmail;
