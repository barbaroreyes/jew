const router = require('express').Router();
const User = require('../models/Users');


router.post('/register',(req,res)=>{
    const newUser = new User({
        username:req.body.username,
        password:{type:String,require:true , unique:true},
        isAdmin:{type:Boolean,require:true,default:false},
        img: String,
    });

})


module.exports= router;