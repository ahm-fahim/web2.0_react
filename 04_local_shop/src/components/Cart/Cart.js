import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart, handleDeleteCart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const products of cart) {
        quantity = quantity + products.quantity;
        total = total + products.price * products.quantity;
        shipping = shipping + products.shipping;
    }
    const vat = parseFloat((total * 0.1).toFixed(2));
    const totalAmount = total + shipping + vat;
    return (
        <div className="text-light">
            <div className="cartItems">
                {cart.map((items) => (
                    <CartItem
                        key={items.id}
                        items={items}
                        handleDeleteCart={handleDeleteCart}
                    ></CartItem>
                ))}
            </div>
            <p>
                Total Items :{" "}
                <span className="text-danger fw-bold">{cart.length}</span>
            </p>
            <p>
                Total Quantity :{" "}
                <span className="text-danger fw-bold">{quantity}</span>
            </p>
            <p>
                Total Price :{" "}
                <span className="text-danger fw-bold">{total.toFixed(2)}</span>$
            </p>
            <p>
                Total Shipping :{" "}
                <span className="text-danger fw-bold">
                    {shipping.toFixed(2)}
                </span>
                $
            </p>
            <p>
                Vat: <span className="text-danger fw-bold">{vat}</span>
            </p>
            <p>
                Total Amount:{" "}
                <span className="text-warning fw-bold">
                    {totalAmount.toFixed(2)}
                </span>
                $
            </p>
        </div>
    );
};

export default Cart;
