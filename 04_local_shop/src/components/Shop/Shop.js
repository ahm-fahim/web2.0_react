import { useState, useEffect } from "react";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
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
        <div className="container-fluid ">
            <div className="row">
                {products.map((product) => (
                    <Products
                        key={product.id}
                        products={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>
                ))}
            </div>
            <Sidebar cart={cart}></Sidebar>
        </div>
    );
};

export default Shop;
