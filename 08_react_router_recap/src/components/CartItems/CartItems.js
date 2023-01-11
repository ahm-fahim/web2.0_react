import React from "react";
import styles from "./CartItems.module.css";

const CartItems = ({ items, handleRemoveItem }) => {
    const { name, picture, price } = items;
    return (
        <div className={styles.cart}>
            <img src={picture} alt="" />
            <div>
                <h4>{name}</h4>
                <h3>{price}$</h3>
            </div>
            <button onClick={() => handleRemoveItem(items)}>X</button>
        </div>
    );
};

export default CartItems;
