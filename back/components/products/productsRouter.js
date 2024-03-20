import express from 'express';
import { Router } from 'express';
let productsRouter=express.Router()
import productsController from './productsController.js'


//productsRouter.get('/', productsController.getProduct);

productsRouter.post('/addproduct', productsController.addProduct);

productsRouter.get('/getAllProducts',productsController.getAllProducts)
//productsRouter.post('/modproduct',usersController.modifyProduct)

export default productsRouter