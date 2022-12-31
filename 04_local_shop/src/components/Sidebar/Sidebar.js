import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";

const Sidebar = ({ cart }) => {
    return (
        <div>
            <nav className="navbar navbar-dark sidebarPosition">
                <div className="container">
                    <div className="d-flex">
                        <button
                            className="navbar-toggler text-bg-light cartIcon toggleBTN"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                        >
                            <span className="text-danger">{cart.length}</span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </div>
                    <div
                        className="offcanvas offcanvas-end bg-dark"
                        tabIndex="-1"
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h3
                                className="offcanvas-title"
                                id="offcanvasDarkNavbarLabel"
                            >
                                <span className="text-danger fw-bold">
                                    Order Summary
                                </span>
                            </h3>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <Cart cart={cart}></Cart>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
