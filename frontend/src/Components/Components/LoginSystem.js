import React, { useState } from "react";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import '../Styles/LoginSystem.css';


const LoginSystem = () => {
  const [showPassword, setShowPassword] = useState(false); // Define the state variable for password visibility

  const handleClickShowPassword = () => {
    // Define the event handler for toggling password visibility
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    // Define the event handler for mouse down on password input
    event.preventDefault();
  };

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
          <h2 className="test">Welcome Back</h2>
          <TextField
            sx={{ m: 1, width: "250px" }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className="email"
          />
          <FormControl
            sx={{ m: 1, width: "250px" }}
            variant="outlined"
            className="password"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox value="remember" color="primary" className="check1" />
            }
          />
          <label className="check">Remember me</label>
          <br />
          {/* Forgot password link */}
          <Link href="/forgot-password" variant="body2" className="link">
            Forgot password?
          </Link>
          <br />
          <Button
            type="submit"
            variant="contained"
            className="btn"
            sx={{ m: 1, width: "250px", backgroundColor: "#0e351f" }}
          >
            Sign in
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="btn1"
            sx={{
              m: 1,
              width: "250px",
              backgroundColor: "white",
              borderColor: "#0e351f",
              color: "#1C5555",
            }}
          >
            Sign in with Google
          </Button>
          <div className="link2">
            <label>Don't have an account</label>
            <Link href="/forgot-password" variant="body2">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSystem;
