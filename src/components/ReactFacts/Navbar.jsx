import React from "react";
import reactLogo from '../../assets/react.svg'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <img src={reactLogo} alt="" />
                <h4 className="text-left">ReactFacts</h4>
            </div>
            <div className="nav-right">
                <p className="text-right">React course - Project 1</p>
            </div>
        </div>
    )
}