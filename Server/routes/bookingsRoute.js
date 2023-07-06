const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Arena = require("../models/arena");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const Stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/bookarena", async (req, res) => {
  const {
    arena,
    court,
    userid,
    startTime,
    endTime,
    totalAmount,
    duration,
    token,
  } = req.body;

  try {
    const customer = await Stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await Stripe.charges.create(
      {
        amount: totalAmount * 100,
        customer: customer.id,
        currency: "LKR",
      },
      {
        idempotencyKey: uuidv4(), //we use this cz same customer should not be charged twice
      }
    );

    if (payment) {
      
        const newbooking = new Booking({
          arena: arena.name,
          arenaid: arena._id,
          court: court.name,
          userid,
          startTime: moment(startTime).format("HH:mm:ss"),
          endTime: moment(endTime).format("HH:mm:ss"),
          totalAmount,
          duration,
          transactionId: "1234",
        });
        const booking = await newbooking.save();

        const arenatemp = await Arena.findOne({ _id: arena._id });
        
        arenatemp.currentbookings.push({
          bookingid: booking._id,
          startTime: moment(startTime).format("HH:mm:ss"),
          endTime: moment(endTime).format("HH:mm:ss"),
          userid: userid,
          status: booking.status,
        });
        await arenatemp.save();
        
      
    }

    res.send("Payment Successful");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
