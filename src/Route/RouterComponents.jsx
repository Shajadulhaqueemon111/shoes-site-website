import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainRoute from "./MainRoute";
import Error from "../ErrorsPage/Error";

import Homepage from "../Documents/Homepage";
import Expolore from "../Expolore/Expolore";
import ShoeCart from "../Cart/ShoeCart";
import Login from "../Documents/Pageses/Home/Login/Login";
import Register from "../Documents/Pageses/Register.jsx/Register";
import PrivateRoute from "../Private/PrivateRoute";
import Update from "../UpdateShoes/Update";
import Payment from "../PaymentData/Payment";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainRoute></MainRoute>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Homepage></Homepage>
        },
        {
            path:"/explore",
            element:<PrivateRoute><Expolore></Expolore></PrivateRoute>
        },
        {
            path:"/cart",
            element:<PrivateRoute><ShoeCart></ShoeCart></PrivateRoute>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/update/:id",
          element:<Update></Update>,
          loader:({params})=>fetch(`http://localhost:5000/shows/${params.id}`)

        },
        {
          path:"/payment/:id",
          element:<Payment></Payment>
        }
      ]
    },
   
  ]);
  
  export default router;