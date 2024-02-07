import express  from "express";
let router=express.Router()
import Controller from "../controllers/controllers.js";
import productsController from "../DB/components/products/productsController.js";


router.get('/',Controller.showUsers)
router.post('/register',Controller.addUsers)
router.post('/moduser',Controller.modifyUser)

//CAMBIAR A PRODUCTS/SHOW PRODUCTSSS
router.get('/', productsController.getProduct);
router.post('/addproduct', productsController.addProduct);
router.get('/showproducts',productsController.showProduct)
router.post('/modproduct',productsController.modifyProduct)

export default router