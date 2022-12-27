/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
    return (
        <div className="container fixed-top">
            <nav class="navbar navbar-expand-lg text-bg-danger">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold " href="#">
                        Coktail
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav"></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;