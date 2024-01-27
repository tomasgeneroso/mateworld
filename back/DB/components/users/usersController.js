import User from "./Schema/usersModel.js";

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
const  addUser=async (data)=>{
    try {
        if (!data.username || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
            res.status(400).send({message: 'Faltan datos, volve atras'});
        } else {
            let userE= await User.getUser(data)
            if(userE) return true 
            let response = await User.addUser(data)
            return response 
        }
    } catch (error) {
        console.log('error en controllerUsers, adduser',error)
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

/*
class usersController{
    async showUsers() {
        try {
            let response=await User.showUsers()
            return response
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
        }   
    }
    async getUser(data){
        try {
            if (!data.username || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
                res.status(400).send({message: 'Faltan datos, volve atras'});
            }
            //let data = await user.validateLogin(req.body.email,req.body.password)
            let response=await User.getUser(data)
            console.log("🚀 ~ usersController ~ getUser ~ response:", response)
            return response
            
        } catch (error) {
            console.log("🚀 ~ file: controllerUsers.js ~ line 12 ~ getUser ~ error", error)
        }
    }
    async addUser(data){
        try {
            if (!data.username || !data.password || !data.name || !data.surname || !data.birthday  || !data.address || !data.postalCode) {
                res.status(400).send({message: 'Faltan datos, volve atras'});
            } else {
                let userE= await User.getUser(data)
                if(userE) return true 
                let response = await User.addUser(data)
                return response 
            }
        } catch (error) {
            console.log('error en controllerUsers, adduser',error)
        }
    }    
}*/

export default {addUser,getUser,showUsers,modifyUser}