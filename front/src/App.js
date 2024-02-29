import React from "react";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import './style/App.css';
import Nav from "./common/nav/nav"
import Footer from "./common/footer/footer"
import Home from "./pages/Home/Home";
import Showcase from "./pages/Showcase/Showcase"; //rebuild and reproduce with other tabs
import Register from "./pages/Login/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import AuthContextProvider from './context/AuthContext.jsx'
  const Layout = () => {
  return (
      <>
        <Nav/>
        <Outlet />
        <Footer />
     </>
     );
   };
  
  const router = createBrowserRouter([
    {
      path: "/",
        element: <Layout />,
        children: [
        {
         path: "/",
         element: <Home />,
        },
        {
          path: "/Showcase",
          element: <Showcase />,
         },
        {
          path: "/Login",
          element: <Login />,
         },
        {
          path: "/register",
          element: <Register />,
         },
         {
           path: "/Dashboard",
           element: <Dashboard />,
        },
        
         
     ],
    }
    
      /*   {
         path: "/Dashboard",
          element: <UserDashboard />,
       }
   */   
   ]);
  
  const App = () =>{
    
    return (
      <div className="app">
        <div className="container">
            <RouterProvider router={router} />
        </div>
      </div>
    );
  }
  export default App