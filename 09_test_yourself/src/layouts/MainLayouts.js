import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
const MainLayouts = () => {
    return (
        <div>
            <Navbar />
            <div className="m-auto mt-20 px-10 md:bg-purple-50 h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;
