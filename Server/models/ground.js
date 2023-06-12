const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groundSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
})
const Ground = mongoose.model("ground",groundSchema);

module.exports = Ground;