
import usersModel from "./usersSchema.js";
import auth from '../auth.js' 
import bcrypt from 'bcryptjs'
class User{
    async getUser(data) {
        try {
            let response=await usersModel.find({username:data.username})
            if(response.length>0) return true
            return false
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
        }   
    }
    async showUsers() {
        try {
            let response=await usersModel.find({})
            if(response.length>0) return response
            return false
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
        }   
    }
    async login(data){
       
        let userE=await usersModel.find({username:data.username})
        
        if(userE) {
            const correctPassword = bcrypt.compareSync(data.password,userE[0].password);
           
            if (correctPassword){
                const token = auth.signToken(userE) 
                
                userE[0].password = undefined; //I tried with other ways but always keep the password so I decided to use this script
                
                return {message:'User logged',success:true,token:token,user:userE[0]} 
            }else{
                return {message:'Invalid credentials ',success:false}
            }
                
        }
        return {message:'User does not exists', success:false}
    }
    async register(data) {
        try {
            let user=new usersModel({
                username:data.username,
                name:data.name,
                password:data.password,
                surname:data.surname,
                birthday:data.birthday,
                country:data.country,
                city:data.city,
                address:data.address,
                postalCode:data.postalCode,
                addressDetails:data.addressDetails
            })
            
            user.save()
            .then((obj)=>{
                return {message:'User added',success:true,userAdded:obj._id}
            })
            .catch(e => {
                console.log("🚀 ~ file: usersModel.js:92 ~ User ~ register ~ e:", e)
                return {error:e,success:false,message:'Error'}
            })
            return {message:'User added',success:true,userAdded:user.username}
        }catch(error){
            console.log("🚀 ~ file: usersModel.js:97 ~ User ~ register ~ error:", error)
            return error
        } 
    }
    async modifyUser(data){
        try {
            if (data.hasOwnProperty('username')) {
                moduser= delete data.username;
            }   
            console.log('moduser ',moduser)
            let change=await usersModel.findOneAndReplace({username:data.username},moduser) 
            console.log("🚀 ~ file: usersModel.js:53 ~ User ~ modifyUser ~ change:", change)
            if(change) return change
            return false
        } catch (error) {
            console.log("🚀 ~ file: usersModel.js:58 ~ User ~ modifyUser ~ error:", error)
            
        }
    }
}

export default new User()