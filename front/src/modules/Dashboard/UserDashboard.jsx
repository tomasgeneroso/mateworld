import {React,useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate} from 'react-router-dom'
function UserDashboard(){
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    if (currentUser!=null){
        return(
            <>
                Dashboard
                
            </>
        )
    }else{
        navigate('/login')
    }
   
}

export default UserDashboard