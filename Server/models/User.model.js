import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide a unique username"],
        unique: [true, "Username exist"]
    },
    password:{
        type: String,
        required: [true, "Please provide a strong password"],
        unique: false,
    },
    email:{
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
    },
    firstName: {type: String},
    lastName: {type: String},
    mobile: {type: Number},
    address: {type: String},
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);