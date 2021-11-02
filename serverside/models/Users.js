const { Schema, model } = require("mongoose");

//DOG SCHEMA
const UserSchema = new Schema(
  {
    username:{type:String,require:true , unique:true},
    email:{type:String,require:true , unique:true},
    password:{type:String,require:true , unique:true},
    isAdmin:{type:Boolean,require:true,default:false},
    img: String,
  },
  
  { timestamps: true }
);

//DOG MODEL
const User = model("User", UserSchema);

//EXPORT MODEL
module.exports = User;