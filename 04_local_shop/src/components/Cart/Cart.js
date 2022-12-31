import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log("cart:",cart);
    return (
        <div className="text-light">
            <p> Total Items : <span className="text-danger fw-bold">{cart.length}</span> </p>
            <p> Total Price : <span className="text-danger fw-bold"></span> </p>
            <p> Total Shipping : <span className="text-danger fw-bold"></span>  </p>
            <p> Vat: <span className="text-danger fw-bold"></span>  </p>
            <p> Total Amount: <span className="text-warning fw-bold"></span> </p>
        </div>
    );
};

export default Cart;
