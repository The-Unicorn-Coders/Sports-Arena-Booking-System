const mongoose = require("mongoose");

const arenaSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    court: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("arena", arenaSchema);

