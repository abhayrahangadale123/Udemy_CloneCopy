
let express = require("express");
const User = require("../Models/userModel");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
let Router = express.Router();
 


// singup.....
Router.post("/signup", async (req,res)=>{
    let user = req.body;
    let data = await User.findOne({email:user.email});
    if(data){
        res.send("user alredy acesss jinda")
    }
    else{
        let updatePass = await bcrypt.hash(user.password,10);
        let dbUser = await User.create({
            username:user.username,
            email:user.email,
            password:updatePass,
            role:user.role

        })
        dbUser.save();
        res.send("accoutn create")
    }
})
module.exports = Router