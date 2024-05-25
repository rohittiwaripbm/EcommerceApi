import * as productRepo from "../repo/product.repo.js";
export const addProduct = async(req, res)=>
    {
        let product = req.body;
        let newProduct = await productRepo.addProduct(product);
        let data = {product:newProduct};
        res.send(data);
    }


export const getProducts = async(req, res)=>{
    let products = await productRepo.getProduct();
    let data = {products:products};
    
    res.send(data);
}

export const deleteProduct = async(req, res)=>{
    let id = req.params.id;
    let deletedProduct = await productRepo.deleteProduct(id);
    if(deletedProduct){
        let data = {message:"product deleted"};
        res.send(data);
    }
    else{
        throw new Error("something wrong");
    }

}

export const updateProduct = async(req, res)=>
    {
        let id = req.params.id;
        let {number} = req.query;

        let update = await productRepo.updateQunatity(id, number);
        let data = {data:{product:update,message:"updated successfully"}};
        res.send(data)
    }