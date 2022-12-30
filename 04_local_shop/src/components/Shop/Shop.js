import { useState, useEffect } from "react";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (products) => {
        console.log(products);
        const newCart = [...cart, products];
        setCart(newCart);
    };

    return (
        <div className="container-fluid mt-5 pt-5">
            <div>
                <h1>Cart : {cart.length}</h1>
            </div>
            <div className="row">
                {products.map((product) => (
                    <Products
                        key={product.id}
                        products={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>
                ))}
            </div>
        </div>
    );
};

export default Shop;
