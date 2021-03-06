const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
    {
      userId:{type:String,require:true },
      products:[
          {
            productId:{type:String}  
          },
          {
            quantity:{
                type:Number,
                default:1

            }  
          }
      ],
      
    },
    
    { timestamps: true }
  );
  
  //DOG MODEL
  const Cart = model("Cart", CartSchema);
  
  //EXPORT MODEL
  module.exports = Cart;