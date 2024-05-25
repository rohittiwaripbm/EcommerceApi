import express from 'express';

import { addProduct,getProducts, deleteProduct, updateProduct } from '../controller/product.controller.js';

let productRoute = express.Router();

productRoute.post('/create',addProduct);
productRoute.get('/',getProducts);
productRoute.delete('/:id',deleteProduct);
productRoute.post('/:id/update_quantity',updateProduct);

export default productRoute;