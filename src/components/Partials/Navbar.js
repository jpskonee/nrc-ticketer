import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div>
                logo
            </div>
            <div className="nav-links-bar">
                <div className="nav-links"> <Link to="/userprofile">
                    User Profile
                </Link>
                    </div>
                <div className="nav-links"> My trips </div>
                <div className="nav-links"> <Link to="/about">
                    About us
                </Link>
                 </div>
                <div className="nav-links"> <Link to="/booking">
                    Book Trip
                </Link> </div>
            </div>
            
        </div>
    )
}

export default Navbar
