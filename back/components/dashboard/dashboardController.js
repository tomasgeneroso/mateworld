import { Express } from "express";
import usersController from "../users/usersController";

const showDashboard=()=>{
    return {message:'DASHBOARD',success:true}
}

export default showDashboard