import {React,useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate} from 'react-router-dom'
import UserDashboard from "../../modules/Dashboard/userDashboard";

function Dashboard(){
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    if (currentUser!=null){
        return(
            <>
                <UserDashboard/>
            </>
        )
    }else{
        navigate('/login')
    }
   
}

export default Dashboard