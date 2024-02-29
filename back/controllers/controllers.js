import productsController from '../components/products/productsController.js'
import usersController from '../components/users/usersController.js'
import dashboardController from '../components/dashboard/dashboardController.js'

const showUsers=async (req,res)=>{
    try {
        let response=await usersController.showUsers()
        //console.log("🚀 ~ file: controllers.js:11 ~ showUsers ~ response:", response)
        res.status(200).json({response:response}) 
    } catch (error) {
        console.log('error haciendo tal cosas ',error)
    } 
}
const register=async (req,res)=>{
    try {
        let data=req.body
        if (!data.username || !data.password || !data.name || !data.birthday || !data.country || !data.city  || !data.address || !data.postalCode) {
            return {error:'Data left',success:false}
        } else {
            let response=await usersController.register(data)
            
            if(response.success==true){
                //return res.status(200).json({message:'User added',success:true,userAdded:response})
                return res.status(200).json({message:'User added',success:true})
            }
            //!!MEJORAR
            if (response.error='Already exists') res.redirect('/register') 
            return res.status(400).json({response})
        }
    } catch (error) {
        console.log("🚀 Controller ~ register ~ error:", error)
        return res.status(400).json({error:error})
    }
}
const login=async (req,res)=>{
    try {
        let data=req.body
        if (!data.username || !data.password) {
            return res.status(400).json({message:"Invalid credentials",success:false}).redirect('/login')
        } else {
            //console.log("🚀 ~ file: controllers.js:13 ~ Controller ~ getUser ~ data:", data)  
            let response=await usersController.login(data)
            if(response.success==true) {
                res.status(200).json(response)
                return res
            }else{
                return res.status(400).json(response).redirect('/login')
            }
        }
    } catch (error) {
        console.log("🚀 ~ file: controllers.js:55 ~ login ~ error:", error)
        res.status(400).json({error:error,success:false}).redirect('/login')
    }
}
const logout=async (req,res)=>{
    res.clearCookie("user",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
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

const showDashboard=async (req,res)=>{
    const user=req.cookies.user
    if(user){
        const dashboard=dashboardController.showDashboard()
        console.log("🚀 ~ file: controllers.js:129 ~ showDashboard ~ dashboard:", dashboard)
        if(dashboard.success=true){
            return dashboard
        }else{
            //!refactorizar
            return {message:'Success false ',dashboard:dashboard}
        }
    }else{
        return res.status(400).json(dashboard).redirect('/login')
    }
}
export default {register,showUsers,login,logout,modifyUser,addProduct,showProducts,getProduct,modifyProduct,showDashboard}