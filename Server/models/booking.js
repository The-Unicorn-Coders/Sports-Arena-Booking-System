const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    court: {
        type: String,
        required: true
    },
    
    status: {
        type: String,
        default: 'active'
    }, // active, cancelled
});

module.exports = mongoose.model('Booking', bookingSchema);
