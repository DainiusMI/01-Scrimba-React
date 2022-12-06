import React from "react";
import reactLogo from '../../assets/react.svg'

export default function Navbar(props) {
    return (
        <nav 
            className={props.darkMode ? "dark navbar": "navbar"}
        >
            <div className="nav-left">
                <img src={reactLogo} alt="" />
                <h4 className="text-left">ReactFacts</h4>
            </div>

            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>

        </nav>
    )
}