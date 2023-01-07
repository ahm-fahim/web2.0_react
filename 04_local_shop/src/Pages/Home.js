import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Cover from "../components/Cover/Cover";

const Home = () => {
    return (
        <MainLayout>
            <div className="container m-auto">
                <Cover></Cover>
                <Link
                    to="/shop"
                    className="btn btn-danger position-absolute bottom-0 mb-5 start-50 translate-middle"
                >
                    Let Start Shopping
                </Link>
            </div>
        </MainLayout>
    );
};

export default Home;
