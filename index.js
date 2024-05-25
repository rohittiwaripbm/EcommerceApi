import express from 'express';
import './dotenv.js';
const app = express();
import productRoute from './src/routes/product.routes.js';
app.use(express.json());//for reading the data


app.use('/products', productRoute);



export default app;

