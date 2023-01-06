import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <div className="d-flex bg-white fixed-top p-2 justify-content-center">
            <Link className="px-4 btn btn-outline-warning mx-2" to="/">
                Home
            </Link>
            <Link
                className="px-4 btn btn-outline-warning mx-2"
                to="/postContainer"
            >
                Posts
            </Link>
        </div>
    );
};

export default Navber;
