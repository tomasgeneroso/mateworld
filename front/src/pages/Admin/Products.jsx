import {React,useContext, useEffect} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate} from 'react-router-dom'
import AdminProducts from "../../modules/Products/AdminProducts.jsx";

const Products=()=>{
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
                <AdminProducts/>
            </>
        )
    }
   
}

export default Products