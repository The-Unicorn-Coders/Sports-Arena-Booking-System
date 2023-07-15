const mongoose = require("mongoose");

const arenaSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    }
 
});

module.exports = mongoose.model("arena", arenaSchema);

