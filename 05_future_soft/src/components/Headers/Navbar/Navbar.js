import React, { useState } from "react";
import logo from "../../../images/logo.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navItem = [
        { id: 1, name: "Home", link: "/home" },
        { id: 2, name: "Mobile Apps", link: "/mobile_apps" },
        { id: 3, name: "Service", link: "/service" },
        { id: 4, name: "Blog", link: "/blog" },
        { id: 5, name: "Contact Us", link: "/contact_us" },
    ];
    return (
        <div className="flex justify-between items-center bg-white shadow-md md:px-10 navbar-fixed z-40">
            <div className="flex items-center animate-pulse">
                <img className="w-20 h-20" src={logo} alt="" />
                <p className="font-bold text-3xl font-serif">
                    Future <span className="text-green-600">S</span>oft
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
                {navItem.map((item) => (
                    <li
                        className="mx-2 hover:text-green-600 duration-200"
                        key={item.id}
                    >
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
