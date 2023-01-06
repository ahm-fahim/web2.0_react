import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./layout.css"

function MainLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div className="children">{children}</div>
        </div>
    );
}

export default MainLayout;
