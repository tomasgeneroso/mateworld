
import usersModel from "./usersSchema.js";

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
    async addUser(data) {
        try {
            let response=await usersModel.find({username:data.username})
            if(!response) {
                let user=new User({
                    username:req.body.username,
                    name:req.body.name,
                    surname:req.body.surname,
                    birthday:req.body.birthday,
                    address:req.body.address,
                    postalCode:req.body.postalCode,
                    addressDetails:req.body.addressDetails
                })
                user.save().then(()=>{return console.log('User added!')})
                .catch(e=>{res.status(501).json({error:e,success:false})})
            }
            return response
        }catch(e){
            console.log("🚀 ERROR, ya existe User ~ addUser :", e)
            res.status(304).json({error:e,success:false})
        } 

    }
    async modifyUser(data){
        try {
            let moduser
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