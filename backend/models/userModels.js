const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter the name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter the name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: [true, "Email already Exits"],
    },
    phoneNo: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    avatar: {
        public_id: String,
        url: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("User", userSchema)