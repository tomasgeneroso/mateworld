import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
//import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user','token'])
  const [currentUser, setCurrentUser] = useState( cookies.user || null);

  const login = async (inputs) => {
    try {
      const res = await axios.post('http://localhost:8081/login ', inputs);
      console.log("🚀 ~ file: AuthContext.js:12 ~ login ~ res:", res.data)
      setCurrentUser(res.data.user)
      setCookie('user',res.data.user)
      
      //Creo que no funciona lo de las options
      setCookie('token',res.data.token,{sameSite: 'None', secure:true,maxAge:process.env.EXPIRE_TIME})
      console.log("🚀 ~ file: AuthContext.jsx:19 ~ login ~ currentUser:", {currentUser})
      
    } catch (error) {
      console.log("🚀 ~ file: AuthContext.jsx:25 ~ login ~ error:", error)
      return error
    }
  };

  const logout = async () => {
    try {
      setCurrentUser(null);
      removeCookie('user')
      removeCookie('token')
      window.location.href='/login'
    } catch (error) {
      console.log("🚀 ~ file: AuthContext.jsx:37 ~ logout ~ error:", error)
      return error
    }
  };

  useEffect(()=>{
    setCurrentUser(currentUser)
  },[currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
