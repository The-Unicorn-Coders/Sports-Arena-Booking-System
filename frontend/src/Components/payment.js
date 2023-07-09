import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import "../index.css";
import Swal from "sweetalert2";
import { useLocation } from 'react-router-dom';


function Payment() {
  const location = useLocation();
  const rentPerHour = 2000; //{arena.rentPerHour}
  const queryParams = new URLSearchParams(location.search);
  const selectedDate = queryParams.get('selectedDate');
  const selectedTime = queryParams.get('selectedTime');
  const selectedDuration = queryParams.get('selectedDuration');
  const selectedCourt = queryParams.get('selectedCourt');
  const totalAmount = rentPerHour * selectedDuration;
  const [user, setUser] = useState({ name: "Mary" });

  const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  

  async function onToken(token) {
    console.log(token);
    const bookingDetails = {
      arena: "sugathadasa",
      court: selectedCourt,
      userid: "123456" /*JSON.parse(localStorage.getItem("currentUser"))._id,*/,
      startTime: selectedTime,
      totalAmount,
      date: selectedDate,
      duration:selectedDuration,
      token,
    };
    try {
      const result = await axios.post(
        "/api/bookings/bookarena",
        bookingDetails
      );
      Swal.fire(
        "Congratulations",
        "Your court booked successfully",
        "success"
      ).then((result) => {
        window.location.href = "/home";
      });
    } catch (error) {
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  return (
    <div className="App">
      <Header />

      <div className="m-5" style={{ paddingTop: "50px" }}>
        <div
          className="row justify-content-center mt-5 bs"
          style={{ fontFamily: "inter" }}
        >
          <div className="col-md-6">{/*image n name of arena*/}</div>

          <div className="col-md-6">
            <div style={{ textAlign: "right", paddingRight: "50px" }}>
              <h4>Booking Details</h4>
              <hr />
              <p>
                
                <b>Name: </b>
                {user.name}{" "}
              </p>
              <p>
                <b>Date: </b>
                {formattedDate}{" "}
              </p>
              <p>
                <b>Start Time: </b>
                {selectedTime}{" "}
              </p>
            </div>

            <div style={{ textAlign: "right", paddingRight: "50px" }}>
              <h4>Amount </h4>
              <hr />
              <p>
                <b>Duration:</b> {selectedDuration} hours
              </p>
              <p>
                <b>Rent per hour:</b> Rs. {rentPerHour}{" "}
              </p>
              <p>
                <b>Total Amount:</b> Rs. {totalAmount}
              </p>
            </div>

            <div style={{ float: "right", paddingRight: "75px" }}>
              <StripeCheckout
                amount={totalAmount * 100}
                token={onToken}
                currency="LKR"
                label="Pay Now"
                stripeKey="pk_test_51NIW8yIFDZjSlyetBNPeDvfutZFEKVTXFM4sqyKJVj3OeaNcLVRTMC7PqlAMcGF5NvtWJK90jkCrhHZRH7QeZlYK00uVZets06"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
