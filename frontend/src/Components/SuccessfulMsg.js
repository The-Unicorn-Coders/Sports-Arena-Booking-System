import React from "react";
import Button from "@mui/material/Button";
// Import the CSS file for the component
import "../Styles/SuccessfulMsg.css";

function SuccessfulNotification() {
    return (
        // Render a div with the class name 'App'
        <div className="App">
            {/* Render a header with a message indicating password change */}
            <header className="App-header">
                <h3 className="header2">Successful</h3>
                {/* Render a horizontal line */}
                <hr></hr>
                {/* Render a paragraph with a message indicating successful password change */}
                <div className="para1">
                    Ground has been created successfully. You can add a court to the
                    ground you have created.
                </div>
                <div className="para2">Do you wish to continue?</div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                ></div>
                <div className="addbtn">
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: "#0e351f",
                            "&:hover": {
                                backgroundColor: "#0e351f",
                            },
                        }}
                    >
                        Add a Court
                    </Button>
                </div>
                <div className="latbtn">
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: "#FFFFFF",
                            color: "#0e351f",
                            borderColor: "#0e351f",
                            "&:hover": {
                                backgroundColor: "#FFFFFF",
                                color: "#0e351f",
                                borderColor: "#0e351f",
                            },
                        }}
                    >
                        Later
                    </Button>
                </div>
            </header>
        </div>
    );
}
export default SuccessfulNotification;
