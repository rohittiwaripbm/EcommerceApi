import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName : {type:String},
    productQuantity: {type:Number, default:1}
});

export const productModel =  mongoose.model('product', productSchema)