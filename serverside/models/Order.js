const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
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

            },  
          },
      ],
      amount:{type:Number , require:true},
      address:{type:Object,require:true},
      status:{type:String,default:'pending'}
    },
    
    { timestamps: true }
  );
  
  //DOG MODEL
  const Order = model("Order", OrderSchema);
  
  //EXPORT MODEL
  module.exports = Order;