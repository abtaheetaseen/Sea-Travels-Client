import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    console.log(user)

    if(loading){
        return <div className='flex items-center justify-center'>
            <div className="loading loading-infinity loading-lg min-h-screen "></div>
        </div> 
    }

    if(user){
        return children;
    }

  return <Navigate to="/login"></Navigate>
}

export default PrivateRoute
