import React, { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const [isAuth , setIsAuth] = useState()

    const signUp = ()=>{
       setIsAuth(true) 
    }

    const logOut = () =>{
        setIsAuth(false)
    }

    return(
        <LoginContext.Provider value={{
            isAuth,signUp, logOut
        }}>
            {children}
        </LoginContext.Provider>
    )

}


