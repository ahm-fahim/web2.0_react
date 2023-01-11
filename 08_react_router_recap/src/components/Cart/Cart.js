import React from "react";
import CartItems from "../CartItems/CartItems";
import styles from "./Cart.module.css";

const Cart = ({ cart, handleRemoveItem }) => {
    //conditional rendaring
    let message;
    if (cart.length === 0) {
        message = <p>Please Buy Something!</p>;
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <div className={styles.subContainer}>
                {cart.map((items) => (
                    <CartItems
                        key={items._id}
                        items={items}
                        handleRemoveItem={handleRemoveItem}
                    />
                ))}
                {message}
            </div>
            <div>
                <h3>Total Items: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Cart;
