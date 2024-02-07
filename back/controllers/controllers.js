import productsController from '../DB/components/products/productsController.js'
import usersController from '../DB/components/users/usersController.js'

const showUsers=async (req,res)=>{
    try {
        let response=await usersController.showUsers()
        //console.log("🚀 ~ file: controllers.js:11 ~ showUsers ~ response:", response)
        res.status(200).json({response:response}) 
    } catch (error) {
        console.log('error haciendo tal cosas ',error)
    } 
}

const getUser=async (req,res)=>{
    try {
        let data=req.body
        //console.log("🚀 ~ file: controllers.js:13 ~ Controller ~ getUser ~ data:", data)
        if(!data) return res.status(400).json({message:"Insuficient data"})
        let response=await usersController.getUser(data)
        //console.log("🚀 ~ file: controllers.js:9 ~ Controller ~ getUser ~ response:", response)
        if(response==true) res.redirect('/')
        return response
    } catch (error) {
        console.log("🚀 Controller ~ getUser ~ error:", error)
    }
}
const addUsers=async (req,res)=>{
    try {
        let data=req.body
        console.log("🚀 ~ file: controllers.js:30 ~ addUsers ~ data:", data)
        if(!data) return res.status(400).json({message:"Insuficient data"})
        let response=await usersController.addUser(data)
        console.log("🚀 ~ file: controllers.js:33 ~ addUsers ~ response:", response)
        if(response) return res.status(200).json({message:"User added succesfully"})
        return response
    } catch (error) {
        console.log("🚀 Controller ~ addUser ~ error:", error)
        return error
    }
}

const modifyUser=async (req,res)=>{
    try {
        let data=req.body
        if (!data.username) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        }
        
        let change=usersController.modifyUser(data)
        if(change==false) return res.redirect('/')
        if(change) return res.redirect('/')
    } catch (error) {
        console.log("🚀 ~ file: usersModel.js:49 ~ User ~ modifyUser ~ error:", error)
    }
}

const showProducts=async (req,res)=>{
    try {
        let response=await usersController.showProducts()
        
        res.status(200).json({response:response}) 
    } catch (error) {
        console.log('error haciendo tal cosas ',error)
    } 
}

const getProduct=async (req,res)=>{
    try {
        let data=req.body
        //console.log("🚀 ~ file: controllers.js:13 ~ Controller ~ getUser ~ data:", data)
        if(!data) return res.status(400).json({message:"Insuficient data"})
        let response=await productsController.getProduct(data)
        //console.log("🚀 ~ file: controllers.js:9 ~ Controller ~ getUser ~ response:", response)
        if(response) res.redirect('/')
        return response
    } catch (error) {
        console.log("🚀 ~ file: controllers.js:75 ~ getProduct ~ error:", error)
        
    }
}
const addProduct=async (req,res)=>{
    try {
        let data=req.body
        if(!data) return res.status(400).json({message:"Insuficient data"})
        let response=await productsController.addProduct(data)
        if(response==true) res.redirect('/')
        return response
    } catch (error) {
        console.log("🚀 ~ file: controllers.js:87 ~ addProduct ~ error:", error)
        
    }
}

const modifyProduct=async (req,res)=>{
    try {
        let data=req.body
        if (!data.name) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        }
        let change=productsController.modifyProduct(data)
        if(change==false) return res.redirect('/')
        if(change) return res.redirect('/')
    } catch (error) {
        console.log("🚀 ~ file: usersModel.js:49 ~ User ~ modifyUser ~ error:", error)
    }
}


/*
class Controller{
    async showUsers() {
        try {
            let response=await usersController.showUsers()
            return response
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
        }   
    }
    async getUser (req,res){
        try {
            let data=req.body
            console.log("🚀 ~ file: controllers.js:13 ~ Controller ~ getUser ~ data:", data)
            if(!data) return res.status(400).json({message:"Insuficient data"})
            let response=await usersController.getUser(data)
            console.log("🚀 ~ file: controllers.js:9 ~ Controller ~ getUser ~ response:", response)
            if(response==true) res.redirect('/')
            return response
        } catch (error) {
            console.log("🚀 Controller ~ getUser ~ error:", error)
            
        }
    }
    async addUser(req,res){
        try {
            let data=req.body
            if(!data) return res.status(400).json({message:"Insuficient data"})
            let response=await userController.addUser(data)
            if(response==true) res.redirect('/')
            return response
        } catch (error) {
            console.log("🚀 Controller ~ addUser ~ error:", error)
            
        }
    }
}
 */
export default {addUsers,showUsers,getUser,modifyUser,addProduct,showProducts,getProduct,modifyProduct}