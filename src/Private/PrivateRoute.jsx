import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import { CircleLoader, ClockLoader } from 'react-spinners';



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    const location=useLocation()
    console.log(location.pathname)
 if(loading){
    return <ClockLoader color="#36d7b7" />
 }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
       
};

export default PrivateRoute;