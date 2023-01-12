import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-white drop-shadow md:px-10 navbar-fixed z-40 h-20 px-2 top-0 right-0 left-0 fixed">
            <div className="flex items-center">
                <p className="font-bold text-3xl font-serif">
                    Test <span className="text-purple-700">Y</span>
                    ourself
                </p>
            </div>
            <div
                onClick={() => setOpen(!open)}
                className="md:hidden w-12 h-12 z-40"
            >
                {open ? (
                    <XMarkIcon></XMarkIcon>
                ) : (
                    <Bars3BottomRightIcon></Bars3BottomRightIcon>
                )}
            </div>
            <ul
                className={`md:flex md:static bg-white absolute duration-300 ease-in-out ${
                    open
                        ? "top-0 right-0 pt-20 shadow-md w-40 h-screen"
                        : "right-[-200px] hidden"
                }`}
            >
                <li className="mx-2 hover:text-purple-700 duration-200">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-2 hover:text-purple-700 duration-200">
                    <Link to="/quiz">Quiz</Link>
                </li>
                <li className="mx-2 hover:text-purple-700 duration-200">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
