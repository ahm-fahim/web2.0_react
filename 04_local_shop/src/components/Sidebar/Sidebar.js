import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark sidebarPosition">
                <div class="container">
                    <div class="d-flex">
                        <button
                            class="navbar-toggler text-bg-dark toggleBTN"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                        >
                            Cart
                        </button>
                    </div>
                    <div
                        className="offcanvas offcanvas-end bg-dark"
                        tabindex="-1"
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title"
                                id="offcanvasDarkNavbarLabel"
                            >
                                <span className="text-warning fw-bold">
                                    Inventory Cart
                                </span>
                            </h5>
                            <button
                                type="button"
                                class="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"></ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
