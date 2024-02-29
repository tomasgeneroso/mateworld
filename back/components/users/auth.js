import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

let jwtSecret=process.env.SECRET
let expireTime=process.env.EXPIRE_TIME


//genera jwt
const  signToken= (data) => {
    
    const payload={
        username:data._id,
        name:data.name,
        surname:data.surname,
        country:data.country,
        city:data.city,
        address:data.address,
        postalCode:data.postalCode,
        //role:data.role,                       //cambiar en base al cargo que tenga!!
        timeExp:expireTime
    }
    const token= jwt.sign({payload},jwtSecret,{expiresIn:expireTime})

        //console.log("🚀 ~ file: auth.js:28 ~ signToken ~ token:", token)
    return token 
}

//valida jwt
const authToken=async (token) => {
    try {
        if(!token) return error        
        const verified=jwt.verify(token,jwtSecret,(error,decoded)=>{
            if (error)  return error
            //poner decoded en cookies?
        })
        console.log(verified)
        return verified
    }catch (error) {
        console.log("🚀 ~ file: auth.js:43 ~ authToken ~ error:", error)

        if(error instanceof jwt.TokenExpiredError){
            res.redirect('/')
        }
        return error
    }
}

const LoggedIn=async (req,res,next)=>{
    try {
        console.log("🚀 ~ file: auth.js:59 ~ LoggedIn ~ req.cookies.token:", req.cookies.token)
        const token=req.cookies.token
        if(!token) return res.redirect('/')
        let response=await authToken(token)    
        if(!response) return res.redirect('/')
        next()
    } catch (error) {
        console.log("🚀 ~ file: auth.js:65 ~ LoggedIn ~ error:", error)
        return error
    }
}

export default {signToken,authToken,LoggedIn}