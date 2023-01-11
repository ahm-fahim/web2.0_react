import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../components/Products/Products";
import styles from "./Home.module.css";

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2>Home Page</h2>
            <div className={styles.row}>
                {products.map((item) => (
                    <Products key={item.id} item={item}></Products>
                ))}
            </div>
        </div>
    );
};

export default Home;
