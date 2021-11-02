const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
    {
      title:{type:String,require:true , unique:true},
      desc:{type:String,require:true },
      categories:{type:String,require:true},
      img: {type:String,require:true},
    },
    
    { timestamps: true }
  );
  
  //DOG MODEL
  const Product = model("user", ProductSchema);
  
  //EXPORT MODEL
  module.exports = Product;