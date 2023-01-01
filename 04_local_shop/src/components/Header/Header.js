import React from "react";
import "./Header.css";
import logo from "../../images/pngwing.com.png";

const Header = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand">
                        <img src={logo} alt="" width="100" />
                    </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <span className="nav-link" aria-current="page">
                                    Shop
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">Orders</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">Inventory</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;