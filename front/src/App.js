import React from "react";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import "./App.css";
import Nav from "./common/nav/nav"
import Footer from "./common/footer/footer"
import Home from "./pages/Home/Home";
import Showcase from "./pages/Showcase/Showcase"; //rebuild and reproduce with other tabs
import Register from "./pages/Login/Register.jsx";
import Login from "./pages/Login/Login.jsx";
  //import Dashboard from './pages/Dashboard/Dashboard.jsx'
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
          path: "/Register",
          element: <Register />,
         },
    
     ],
    },
    {
      path: "/register",
       element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
     },
    
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