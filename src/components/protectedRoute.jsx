import React, { useEffect } from "react";
import { useLogin } from "./hook/useLogin";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    const {isAuth} = useLogin()
    const location = useLocation()
    
    if(!isAuth && location.pathname !== '/Login'){
        return (<Navigate to='/Login'/>)
    }
    else if(isAuth && location.pathname === '/Login'){
        return (<Navigate to='/Home'/>)
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute