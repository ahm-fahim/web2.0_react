import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navber.module.css";

const Navber = () => {
    return (
        <div className={styles.navber}>
            <h3>React Router</h3>
            <div>
                <Link className={styles.navLink} to="/">
                    Home
                </Link>
                <Link className={styles.navLink} to="/orders">
                    Orders
                </Link>
            </div>
        </div>
    );
};

export default Navber;
