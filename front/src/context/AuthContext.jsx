import axios from "axios";
import { createContext, useState } from "react";
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['user'])
  const [currentUser, setCurrentUser] = useState( cookies.user || null);
  //!! HAY EJEMPLO USANDO USER INTERFACE VER EN BRAVE

  const login = async (inputs) => {
    const res = await axios.post('http://localhost:8081/login ', inputs);
    console.log("🚀 ~ file: AuthContext.js:12 ~ login ~ res:", res.data)
    setCurrentUser(res.data)
    setCookie('user',res.data.username)
    //Creo que no funciona lo de las options
    setCookie('token',res.data.token,{sameSite: 'None', secure:true,maxAge:process.env.EXPIRE_TIME })
    
    console.log("🚀 ~ file: AuthContext.jsx:19 ~ login ~ currentUser:", currentUser)
    //console.log("🚀 ~ file: AuthContext.js:16 ~ login ~ res.token:", res.data.token)
  };

  //!!como llamar al logout sin necesidad de ponerlo en el router app.js ya que no es un componente que se reenderizara para el front
  const logout = async () => {
    //!!ES NECESARIO currentUser PUDIENDO LEER LAS COOKIES? POR EL TEMA DE CONSULTAS Y ESO mepa que hay que borrar
    setCurrentUser(null);
    setCookie('user','')
    setCookie('token','')
    
  };

 //!!puedo hacer sin el useEffect?
  /* 
  useEffect(() => {
    setCurrentUser(cookies.username)
    
  }, [cookies.username]);
  */
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
