const { json } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const user = require("../models/user");

//Sign Up
signupUser: async (req, res) => {
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
    }
}
      //Login
      loginUser: async(req,res)=>{
        try{
            const user = await User.findOne({email: req.body.email});
            if(!user){
                return res.status(404).json("Wrong email!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword) {
                return res.status(404).json("Wrong password")
            }
            if(user && validPassword){
                const accessToken = authControllers.gAccessToken(user);

                const refreshToken = authControllers.gRefreshToken(user); 
        
                refreshTokens.push(refreshToken)

                res.cookie("refreshToken", refreshToken,{
                    httpOnly: true,
                    secure: false,
                    path:"/",
                    sameSite:"strict"
                })

                const {password, ...others} = user._doc; // chỉ trả lại những giá trị khác pw
                res.status(500).json({...others, accessToken})
            }
        }
        catch(err){
            res.status(500).json(err)
        }
    }