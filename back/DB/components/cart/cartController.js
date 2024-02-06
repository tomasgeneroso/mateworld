import Cart from "./Schema/cartModel.js";


//MODELO A SEGUIR :9
const  showCart=async ()=>{
    try {
        let response=await Cart.showProduct()
        return res.status(200).json(response)
    } catch (error) {
        console.log("🚀 ~ file: cartController.js:10 ~ showCart ~ error:", error)
        res.status(500).send(response)
    }  
}

const  getCart=async (data)=>{
    try {
        //REVISAR EL IF
        if (!data.username || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        }
        //let data = await user.validateLogin(req.body.email,req.body.password)
        let response=await Product.getCart(data)
        return response
        
    } catch (error) {
        console.log("🚀 ~ file: controllerUsers.js ~ line 12 ~ getUser ~ error", error)
    }
}
const  addCart=async (data)=>{
    try {
        if (!data.productname || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        } else {
            let cartE= await Cart.getCart(data)
            if(cartE) return true 
            let response = await Cart.addCart(data)
            return response 
        }
    } catch (error) {
        console.log("🚀 ~ file: productsController.js:36 ~ addProduct ~ error:", error)
    }
}

const modifyCart=async (data)=>{
    try {
        if (!data.name) {
            return false
        }
        let change=await User.modifyCart(data)
        if(change) return change
        return false
    } catch (error) {
        console.log("🚀 ~ file: usersModel.js:49 ~ User ~ modifyUser ~ error:", error)
    }
}
//add delete product
export default {addCart,getCart,showCart,modifyCart}