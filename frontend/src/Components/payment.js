import StripeCheckout from 'react-stripe-checkout';
import React, {useState} from 'react';
import axios from 'axios';
import Header from './Header';
import '../index.css';
import Swal from 'sweetalert2';


function Payment() {
    const rentPerHour = 2000;//{arena.rentPerHour}
    const duration = 2;
    const totalAmount = rentPerHour * duration;

async function onToken (token) { 
    console.log(token);
        const bookingDetails = {
        /*arena,
        court,*/
        userid: JSON.parse(localStorage.getItem("currentUser"))._id,
       /* startTime,
        endTime,*/
        totalAmount,
        duration,
        token,
        };
        try {
        const result = await axios.post("/api/bookings/bookarena", bookingDetails);
        Swal.fire('Congratulations', 'Your court booked successfully','success').then(result=> {
            window.location.href='/home'
        })

        } catch (error) {
            Swal.fire('Oops','Something went wrong','error')
        }
        
}

  return (
    <div className="App">
    <Header/>

        <div className="m-5" style={{paddingTop: '50px'}}>

                <div className="row justify-content-center mt-5 bs" style={{fontFamily:"inter"}}>

                    <div className="col-md-6">
                    
                       {/*image n name of arena*/}
                    </div>

                    <div className="col-md-6">
                    <div style={{textAlign: 'right', paddingRight: '50px'}}>
                        <h4>Booking Details</h4>
                        <hr/>
                            <p> <b>Name: </b> </p>
                            <p><b>Date: </b> </p>
                            <p><b>Start Time: </b> </p>
                            
                        </div>
                        
                        
                        
                        

                        <div style={{textAlign: 'right', paddingRight: '50px'}}>
                            <h4>Amount </h4>
                            <hr/>
                            <p><b>Duration:</b> {duration} hours</p>
                            <p><b>Rent per hour:</b> Rs. {rentPerHour} </p>
                            <p><b>Total Amount:</b> Rs. {totalAmount}</p>
                            
                        </div>

                        <div style={{float: 'right', paddingRight: '75px'}}>
                           
                            <StripeCheckout
                                amount = {totalAmount * 100}
                                token={onToken}
                                currency = "LKR"
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
