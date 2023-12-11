const { json } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const user = require("../models/user");

let refreshTokens = [];
const authControllers = {
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
        }},
    
    //Access Token
    gAccessToken: (user)=>{
        return jwt.sign({
            id: user.id,
            admin: user.admin
        }, 
        process.env.jwt_access_key,
        {expiresIn: "2h"} //thời hạn token hết hạn
        );
    },
   
    gRefreshToken: (user)=>{
        return jwt.sign({
            id: user.id,
            admin: user.admin
        }, 
        process.env.jwt_refresh_key,
        {expiresIn: "7d"}
        );
    },
    
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
    },
    rRefreshToken: async(req,res)=> {
        //Lấy refresh token từ user
        const refreshToken = req.cookies.refreshToken
        res.status(200).json(refreshToken)
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        if(!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid")
        }
        jwt.verify(refreshToken, process.env.jwt_refresh_key,(err,user)=>{
            if(err){
                console.log(err);
            }
        refreshTokens = refreshTokens.filter((token) => token != refreshToken);
            const newAccessToken = authControllers.gAccessToken(user);
            const newRefreshToken = authControllers.gRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", newRefreshToken,{
                httpOnly: true,
                secure: false,
                path:"/",
                sameSite:"strict"
            });
            res.status(200).json({accessToken: newAccessToken})
        })
    },  
    //Log out
    userLogout: async(req,res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter((token) => token !== req.cookies.refreshToken);
        res.status(200).json("Logged out!")
    }
    };
module.exports = authControllers;

