import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className={styles.container}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
