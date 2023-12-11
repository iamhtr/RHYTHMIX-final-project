const jwt = require("jsonwebtoken");

const middlewareController = {
    //Xác nhận token
    verifyToken: (req,res,next) => {
        const token = req.headers.token;
        if (token){
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.jwt_access_key,(err, user)=>{
                if(err){
                    res.status(403).json("Token is not valid."); 
                }
                req.user = user;
                next();
            });
        }
        else{
            res.status(401).json("You are not authenticated.")
        }
    },
   vTokenAndAdminAuth: (req,res,next) => {
        middlewareController.verifyToken(req,res,()=>{
            if(req.user.id == req.params.id || req.user.admin){
                next();
            }
            else{
                res.status(403).json("Your are not allowed to delele other")
            }
        });
   }
}
module.exports = middlewareController;