import Product from "./Schema/productsModel.js";


//MODELO A SEGUIR :9
const  showProduct=async ()=>{
    try {
        let response=await Product.showProduct()
        return res.status(200).json(response)
    } catch (error) {
        console.log('error haciendo tal cosas ',error)
        res.status(500).send(response)
    }  
}

const  getProduct=async (data)=>{
    try {
        if (!data.username || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        }
        //let data = await user.validateLogin(req.body.email,req.body.password)
        let response=await Product.getUser(data)
        return response
        
    } catch (error) {
        console.log("🚀 ~ file: controllerUsers.js ~ line 12 ~ getUser ~ error", error)
    }
}
const  addProduct=async (data)=>{
    try {
        if (!data.productname || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        } else {
            let productE= await Product.getProduct(data)
            if(productE) return true 
            let response = await Product.addProduct(data)
            return response 
        }
    } catch (error) {
        console.log("🚀 ~ file: productsController.js:36 ~ addProduct ~ error:", error)
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
export default {addProduct,getProduct,showProduct,modifyProduct}