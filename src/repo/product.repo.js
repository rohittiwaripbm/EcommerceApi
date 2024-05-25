import { productModel } from "../model/product.model.js";
import mongoose from "mongoose";

export const addProduct = async(product)=>{
        try {
            let newProduct = new productModel(product);
            await newProduct.save();
            return newProduct;
        } catch (error) {
            throw new error(error.message);
        }
}

export const getProduct = async()=>{
    try {
        let products = await productModel.find();
        return products;
    } catch (error) {
        throw new error(error.message);
    }
}

export const deleteProduct = async(id)=>{
    try {
        let deletedProduct = await productModel.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        throw new error(error.message);
    }
}

export const updateQunatity = async(id,quantity)=>{
    let product = await productModel.findById(id);
    product.productQuantity = parseInt(product.productQuantity) + parseInt(quantity);
    await product.save();
    return product;
}