import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark header sidebar">
                <div class="container d-flex justify-content-end">
                    <div class="">
                        <button
                            class="btn btn-dark toggleBTN"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                        >
                            Inventory Cart
                        </button>
                    </div>
                    <div
                        class="offcanvas offcanvas-end bg-dark"
                        tabindex="-1"
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div class="offcanvas-header">
                            <h5
                                class="offcanvas-title "
                                id="offcanvasDarkNavbarLabel"
                            >
                                <span class="text-danger fw-bold">
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
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li>side</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
