import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import "./SignInPage.css";
const SignInSide = () => {
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
          width: "480px",
          height: "450px",
          marginTop: "20px",
          marginBottom: "20px",
          marginRight: "200px",
        }}
      >
        <div className="logContain">
          {/* Welcome message */}
          <h2 className="test">Registration Form</h2>
          <h5 className="test2">Personal details</h5>
          <div className="text1">
            <TextField
              margin="normal"
              required
              id="fname"
              label="First Name"
              name="fname"
              type="text"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 42,
                },
              }}
            />
          </div>
          <div className="text2">
            <TextField
              margin="normal"
              required
              name="lname"
              label="Last Name"
              type="text"
              id="lname"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 42,
                },
              }}
            />
          </div>
          <TextField
            className="email2"
            margin="normal"
            required
            sx={{
              width: { sm: 100, md: 370 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <div className="text3">
            <TextField
              margin="normal"
              required
              id="mobile"
              label="Mobile Phone"
              name="mobile"
              type="text"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
            />
          </div>
          <div className="text4">
            <TextField
              margin="normal"
              required
              name="telephone"
              label="Telephone"
              type="text"
              id="telephone"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
            />
          </div>
          <div className="drop1">
            <FormControl
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                Province
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Province"
              >
                <MenuItem value={1}>Southern Province</MenuItem>
                <MenuItem value={2}>Uva Province </MenuItem>
                <MenuItem value={3}>Western Province</MenuItem>
                <MenuItem value={4}>Central Province</MenuItem>
                <MenuItem value={5}>North Central Province </MenuItem>
                <MenuItem value={6}>Eastern Province</MenuItem>
                <MenuItem value={7}>North Western Province</MenuItem>
                <MenuItem value={8}>Sabaragamuwa Province</MenuItem>
                <MenuItem value={9}>Western Province</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
            className="text5"
            margin="normal"
            required
            sx={{
              width: { sm: 70, md: 170 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            id="zip"
            label="Zip Code"
            name="zip"
            autoComplete="zip"
            autoFocus
          />
          <TextField
            className="address"
            margin="normal"
            required
            sx={{
              width: { sm: 140, md: 370 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            id="add"
            label="Address"
            name="add"
            autoComplete="add"
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            className="btn"
            sx={{
              width: { sm: 70, md: 370 },
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
    </div>
  );
};

export default SignInSide;
