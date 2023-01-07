import React from "react";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
    return (
        <div>
            <div className="mb-5">
                <Header></Header>
            </div>
            <div className="mt-5 pt-5">{children}</div>
        </div>
    );
};

export default MainLayout;
