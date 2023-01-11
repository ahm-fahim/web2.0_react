import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Products from "../components/Products/Products";
import styles from "./Home.module.css";

const Home = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (items) => {
        const exist = cart.find((element) => element._id === items._id);
        if (exist) {
            alert("Already Added!");
        } else {
            const newCart = [...cart, items];
            setCart(newCart);
        }
    };

    const handleRemoveItem = (items) => {
        const remaining = cart.filter((element) => element._id !== items._id);
        setCart(remaining);
    };
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {products.map((item) => (
                    <Products
                        key={item._id}
                        handleAddToCart={handleAddToCart}
                        item={item}
                    ></Products>
                ))}
            </div>
            <div className={styles.subContainer}>
                <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
            </div>
        </div>
    );
};

export default Home;
