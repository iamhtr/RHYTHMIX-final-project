const router = require("express").Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/user")

router.post("/signup", async (req, res) => {
    try {
        // Kiểm tra xem email đã tồn tại trong DB chưa
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered!" });
        }

        // Nếu email chưa được đăng ký, tiếp tục quá trình tạo user mới
        const salt = await bcrypt.genSalt(10);
        const hashedpw = await bcrypt.hash(req.body.password, salt);
        const hashedcfpw = await bcrypt.hash(req.body.confirmPassword, salt);

        //Tạo user mới
        const newUser = await new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashedpw,
            confirmPassword: hashedcfpw
        })

        //Lưu vào DB
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }})

router.post("/login", async (req, res) => {
    res.send("Logged")
}),

router.get("/user", async (req, res) => {
    res.send("User")
}),

module.exports = router