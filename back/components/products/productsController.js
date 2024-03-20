import Product from "./Schema/productsModel.js";


//MODELO A SEGUIR :9
const  getProduct=async (data)=>{
    try {
        if (!data.name) {
            res.status(400).send({message: 'Faltan datos, volve atras',success:true});
        }
        let response=await Product.getProduct(data)
        return response
    } catch (error) {
        console.log('error haciendo tal cosas ',error)
        res.status(500).send(response)
    }  
}

const  getAllProducts=async (data)=>{
    try {
        let response=await Product.getAllProducts(data)
        return response
        
    } catch (error) {
        console.log("🚀 ~ file: controllerUsers.js ~ line 12 ~ getUser ~ error", error)
        return {message:'error',error:error}
    }
}
const  addProduct=async (data)=>{
    try {
      
        let response = await Product.addProduct(data)
        return response  
        
    } catch (error) {
        console.log("🚀 ~ file: productsController.js:36 ~ addProduct ~ error:", error)
        return {message:'error',error:error}
    }
}

const modifyProduct=async (data)=>{
    try {
        if (!data.name) {
            return false
        }
        let change=await User.modifyUser(data)
        if(change) return change
        return false
    } catch (error) {
        console.log("🚀 ~ file: usersModel.js:49 ~ User ~ modifyUser ~ error:", error)
    }
}
//add delete product
export default {addProduct,getAllProducts,getProduct,modifyProduct}