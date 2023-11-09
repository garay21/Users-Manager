import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

export function useLogin (){
    const {isAuth, signUp, logOut} = useContext(LoginContext)

    return {isAuth,signUp,logOut}
} 