import React from "react";
import './../css/header.css'

const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container-fluid navbar-container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">≡</span>
                    </button>                                 
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">                            
                            <a className="nav-link active" aria-current="page" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Admin</a>
                        </li>               
                    </ul>
                    </div>
                    <div className="navbar-brand">
                        <h2>logo</h2>
                    </div>                    
                </div>
            </nav>
        </header>
    )
}

export default Header