import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import "../Styles/CourtForm.css";
import {createCourt} from "../Helper/api";
import SportsTable from "./table";

function CourtForm() {
    const [opentime, setOpentime] = useState("");
    const [closetime, setClosetime] = useState("");
    const [courtName, setCourtName] = useState("");

    const handleChange = (event) => {
        // Handle the change event and update the state variables
        setOpentime(event.target.value);
        setClosetime(event.target.value);
    };

    const handleCreateCourt = () => {
        // Make an API call to create the court
        createCourt({ name: courtName, openTime: opentime, closeTime: closetime })
            .then(response => {
                // Handle the response
                console.log("Court created successfully", response);
            })
            .catch(error => {
                // Handle the error
                console.error("Failed to create court", error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2 className="head1">Add Court</h2>
                <h5 className="head2">KTS Indoor Cricket Ground</h5>

                <hr />
                <h5 className="head3"> Court name </h5>
                <TextField
                    className="courtName"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <div className="tableP">
                    <SportsTable />
                </div>
                <div>
                    <h5
                        className="head4"
                        style={{
                            left: "25px",
                            fontSize: "16px",
                            position: "absolute",
                            top: "600px",
                        }}
                    >
                        Available Time
                    </h5>
                </div>

                <div className="drop">
                    <label className="day1">Monday</label>
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Opentime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={opentime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop1">
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Closetime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="drop2">
                    <label className="day2">Tuseday</label>
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Opentime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={opentime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop3">
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Closetime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={closetime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop4">
                    <label className="day3">Wednesday</label>
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Opentime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={opentime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop5">
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Closetime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={closetime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop6">
                    <label className="day4">Thursday</label>
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Opentime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={opentime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop7">
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Closetime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={closetime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop8">
                    <label className="day5">Friday</label>
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Opentime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={opentime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop9">
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Closetime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={closetime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop10">
                    <label className="day6">Saturday</label>
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Opentime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={opentime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop11">
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Closetime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={closetime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop12">
                    <label className="day7">Sunday</label>
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Opentime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={opentime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="drop13">
                    <FormControl sx={{ m: 1, minWidth: 130 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Closetime
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={closetime}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={1}></MenuItem>
                            <MenuItem value={2}> </MenuItem>
                            <MenuItem value={3}></MenuItem>
                            <MenuItem value={4}></MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="addbtn">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            width: { sm: 70, md: 110 },
                            "&.MuiInputBase-root": {
                                height: 65,
                            },
                            backgroundColor: "#0e351f", // Set the background color
                            "&:hover": {
                                backgroundColor: "#0e351f", // Set the hover color
                            },
                        }}
                    >
                        Done
                    </Button>
                </div>
                <div className="latbtn">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            width: { sm: 70, md: 110 },
                            "&.MuiInputBase-root": {
                                height: 50,
                            },
                            backgroundColor: "#FFFFFF", // Set the background color to white
                            color: "#0e351f", // Set the font color to #0e351f
                            borderColor: "#0e351f", // Set the border color to #0e351f
                            "&:hover": {
                                backgroundColor: "#FFFFFF", // Set the hover background color to white
                                color: "#0e351f", // Set the hover font color to #0e351f
                                borderColor: "#0e351f", // Set the hover border color to #0e351f
                            },
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </header>
        </div>
    );
}

export default CourtForm;
