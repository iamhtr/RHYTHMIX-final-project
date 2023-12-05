const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type : String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 6,
    },
    admin: {
        type: Boolean,
        default: false, //khi được tạo đều không phải admin
    },
    
}, { timestamps: true } // user được tạo và update khi nào

);

module.exports = mongoose.model("User", userSchema);