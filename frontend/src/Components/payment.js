import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "./Header";
import "../index.css";
import { useLocation } from "react-router-dom";
import arenaImage from "../assets/Sugathadasa.jpg";


function Payment() {
 const location = useLocation();
  const rentPerHour = 2000; //{arena.rentPerHour}
  const queryParams = new URLSearchParams(location.search);
  const selectedDate = queryParams.get("selectedDate");
  const selectedTime = queryParams.get("selectedTime");
  const selectedDuration = queryParams.get("selectedDuration");
  const selectedCourt = queryParams.get("selectedCourt");
  const totalAmount = rentPerHour * selectedDuration;
  const priceForStripe = totalAmount*100;

  const [user, setUser] = useState({ name: "Mary" });
  const [arena,setarena]= useState({ name: "Sugathadasa Stadium" });
 
  const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  
  
 
  const onToken= async token =>{
    try {
      const response = await axios({
        url:'http://localhost:5001/payment',
        method: 'POST',
        data:{
          amount:priceForStripe,
          token,
          court: selectedCourt,
          date: selectedDate,
          duration: selectedDuration,
          startTime: selectedTime,
          totalAmount,
        },
      });
      if (response.status=== 200){

        Swal.fire(
          "Congratulations",
          "Your court booked successfully",
          "success").then((result) => {
            window.location.href = "/home";});
        console.log('Your payment was successful');
      }
        
    } catch (error) {
      Swal.fire("Oops", "Something went wrong", "error");
      console.log(error);
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
          <div className="col-md-6">
          <h5 style={{ marginLeft: "55px" }}><b>{arena.name}</b></h5>
            <div style={{ textAlign: "center" }}>
              <img
                src={arenaImage}
                alt="image"
                style={{ width: "85%", height: "100%", borderRadius:"10px"}}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div style={{ textAlign: "right", paddingRight: "50px" }}>
              <h4><b>Booking Details</b></h4>
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
                amount={priceForStripe}
                token={onToken}
                currency="LKR"
                label="Pay Now"
                name = "Pay with credit card"
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