const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const courtSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    sports : {
        type : String,
        required : true
    },
    openingTime: {
        type: String,
        required: true
    },
    closingTime: {
        type: String,
        required: true
    },
    price : {
        type : Number,
        required : true
    }
})
const Court = mongoose.model("court",courtSchema);

module.exports = Court;