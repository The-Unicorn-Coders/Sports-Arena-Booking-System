import React from "react";
import "../Styles/ResetPassword.css";
import TextField from "@mui/material/TextField";

function Resetpw() {
  return (
    // Main container
    <div className="App">
      <header className="App-header">
        {/* Heading */}
        <h2 className="head1"> Reset Password</h2>
        {/* Paragraph explaining what the user needs to do */}
        <div className="Paragraph">
          Enter the email address with your account and we'll send an email with
          confirmation to reset your Password
        </div>
        {/* Label for email input */}
        <div className="Email1"> Your Email Address</div>
        {/* Email input field */}
        <TextField
          id="outlined-basic"
          placeholder="Email Address"
          variant="outlined"
          className="email"
        />
        {/* Button to initiate password reset */}
        <div>
          <button className="submit">Continue</button>
        </div>
      </header>
    </div>
  );
}
export default Resetpw;
