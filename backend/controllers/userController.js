const User = require("../models/user");

const userController = {
    //Get all users
    getAllUsers: async(_req,res)=>{
        try{
            const user = await User.find();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },

   //Delete user
    deleteUser: async(req,res)=>{
    try{
        const user = await User.findById(req.params.id); //xoá thử, xoá thiệt thì thay findByid
        res.status(200).json("Delete successfully")
    }catch(err){
        res.status(500).json(err);
    }
   }
}   

module.exports = userController;