import React from "react";
import { Link } from "react-router-dom";
import "./Navber.css"

const Navbar = () => {
    return (
        <nav>
            <h1>Fake Blogger</h1>
            <ul>
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/pythonBlog">Python</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/jsBlog">Javascript</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/cPlusPlusBlog">C++</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
