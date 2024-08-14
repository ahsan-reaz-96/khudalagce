import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/OurShop/Shop/Shop";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/shop/:category',
          element:<Shop></Shop>
        }
      ]
    },
  ]);