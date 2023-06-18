import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/GroundForm.css";
import { createArena } from '../Helper/api.js';


function GroundForm() {
    const [groundData, setGroundData] = useState({
        groundName: "",
        address: "",
        city: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGroundData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const createdArena = await createArena(groundData);
            console.log('Created arena:', createdArena);
            // Handle success or any further actions
        } catch (error) {
            console.log('Error creating arena:', error);
            // Handle error or display error message
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2 className="head1">Add Ground</h2>

                <hr />
                <h5 className="name">Name of the Ground</h5>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Name of the Ground"
                    name="ground"
                    placeholder="Name of the Ground"
                    autoComplete="email"
                    autoFocus
                    className="nametest"
                />
                <h5 className="street">Street Address</h5>
                <div className="text1">
                    <TextField
                        margin="normal"
                        required
                        id="fname"
                        label="Street Address"
                        name="Street Address"
                        placeholder="Address"
                        type="text"
                    />
                </div>

                <div className="text2">
                    <TextField
                        margin="normal"
                        required
                        name="lname"
                        label="City"
                        placeholder="City"
                        type="text"
                        id="lname"
                    />
                </div>
                <div className="addbtn">
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: "#0e351f", // Set the background color
                            "&:hover": {
                                backgroundColor: "#0e351f", // Set the hover color
                            },
                        }}
                    >
                        Create
                    </Button>
                </div>
                <div className="latbtn">
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: "white",
                            color: "green",
                            border: "1px solid #0e351f",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "green",
                                border: "1px solid #0e351f",
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

export default GroundForm;
