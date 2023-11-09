import React from "react";
import { useLogin } from "./hook/useLogin";
import { NavLink } from "react-router-dom";

import './../css/login.css'

const Login = () => {

    const {signUp, isAuth} = useLogin()

    const loginAuth = (event)=>{        
        signUp()
    } 

    return(    
        <main className="login-main container h-100">
            <div className="row p-0 h-100 d-flex align-items-center">
                <div className="col-6 w-100 h-0 h-sm-100 p-0 d-flex justify-content-center align-items-center">
                    <div className="d-none d-sm-block">
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="login-form-container col-12 w-100 h-50 col-sm-6 d-flex flex-column">
                    <h1 className="text-center">Access</h1>                    
                    <form className='d-flex align-items-center flex-column' action="" onSubmit={loginAuth}>      
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Username</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>       
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>  
                        <button className="btn btn-primary rounded-0" type="submit">Enter</button>
                    </form>     
                </div>
            </div>                                            
        </main>       
    )
}

export default Login