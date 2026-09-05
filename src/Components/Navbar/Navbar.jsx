import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="nav">

            <div className="nav-logo">
                EV-olution
            </div>

            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="nav-contact">Contact</li>

            </ul>

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {menuOpen ? <FaTimes /> : <FaBars />}

            </div>

        </nav>

    );
};

export default Navbar;
