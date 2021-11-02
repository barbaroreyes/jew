const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
    {
      title:{type:String,require:true , unique:true},
      desc:{type:String,require:true },
      categories:{type:Array},
      img: {type:String,require:true},
      price: {type:Number,require:true},
    },
    
    { timestamps: true }
  );
  
  //DOG MODEL
  const Product = model("Product", ProductSchema);
  
  //EXPORT MODEL
  module.exports = Product;