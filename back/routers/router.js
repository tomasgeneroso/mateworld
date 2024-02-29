import express  from "express";
let router=express.Router()
import Controller from "../controllers/controllers.js";
import productsController from "../components/products/productsController.js";
import auth from '../components/users/auth.js';

//USER ROUTER
router.get('/',Controller.showUsers)
router.post('/login',Controller.login)
router.post('/logout',Controller.logout)
router.post('/register',Controller.register)
//router.post('/moduser',Controller.modifyUser)

//PRODUCTS ROUTER
router.get('/', productsController.getProduct);
router.post('/addproduct', productsController.addProduct);
router.get('/showproducts',productsController.showProduct)
router.post('/modproduct',productsController.modifyProduct)

//DASHBOARD ROUTER
router.get('/dashboard',auth.LoggedIn, Controller.showDashboard)




export default router