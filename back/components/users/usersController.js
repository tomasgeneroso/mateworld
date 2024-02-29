import User from "./Schema/usersModel.js";
import bcrypt from "bcryptjs";


const  showUsers=async ()=>{
    try {
        let response=await User.showUsers()
        return response
    } catch (error) {
        console.log('error haciendo tal cosas ',error)
    }  
}
const  getUser=async (data)=>{
    try {
        if (!data.username || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        }
        //let data = await user.validateLogin(req.body.email,req.body.password)
        let response=await User.getUser(data)
        return response
        
    } catch (error) {
        console.log("🚀 ~ file: controllerUsers.js ~ line 12 ~ getUser ~ error", error)
    }
}
const login=async(data)=>{
    try {
        let response=await User.login(data)
        
        if(response.success=true){
            return response
        }else{
            return {message:'User does not exists', success:false}
        }
        
    } catch (error) {
        console.log("🚀 ~ file: usersController.js:30 ~ login ~ error:", error)
        return {error:error, success:false}
    }
}
const  register=async (data)=>{
    try {
        let userE= await User.getUser(data)
        if(userE) return {error:'Already exists',success:false}
        //if not
        //Hash the password and create a user (change to usersModel? or auth?)
            
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt);
        data.password=hash

        let response = await User.register(data)
        
        if (response.success===false ) return {error:response.e,success:false}
        return response

    } catch (error) {
        console.log("🚀 ~ file: usersController.js:50 ~ register ~ error:", error)
        return {error:error,success:false}
    }
}
const modifyUser=async (data)=>{
    try {
        if (!data.username) {
            return false
        }
        let change=await User.modifyUser(data)
        if(change) return change
        return false
    } catch (error) {
        console.log("🚀 ~ file: usersModel.js:49 ~ User ~ modifyUser ~ error:", error)
    }
}

export default {register,login,getUser,showUsers,modifyUser}