import {React,useContext, useEffect} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate} from 'react-router-dom'
import UserDashboard from "../../modules/Dashboard/UserDashboard";

const Dashboard=()=>{
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if (currentUser===null){
            navigate('/login')
        }
    },[currentUser,navigate])

    if (currentUser!==null){
        return(
            <>
                <UserDashboard/>
            </>
        )
    }
   
}

export default Dashboard