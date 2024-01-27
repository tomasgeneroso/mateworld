import { Express } from 'express';
import { Router } from 'express';
let productsRouter=express.Router()
import productsController from './usersController.js'


//productsRouter.get('/', productsController.getProduct);

//productsRouter.post('/', productsController.addProduct);

//productsRouter.get('/showproducts',usersController.showproduct)
//productsRouter.post('/modproduct',usersController.modifyProduct)

export default productsRouter