import { Express } from "express";
import usersController from "../users/usersController";

const getDashboard=()=>{
    return {message:'DASHBOARD',success:true}
}

export default getDashboard