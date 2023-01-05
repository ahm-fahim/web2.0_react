import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pythonBlog">Python</Link>
                </li>
                <li>
                    <Link to="/jsBlog">Javascript</Link>
                </li>
                <li>
                    <Link to="/cPlusPlusBlog">C++</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
