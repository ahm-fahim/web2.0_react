import { useState, useEffect } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //loaded product from the database
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // loaded product from local storage
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    //add product to the cart
    const handleAddToCart = (products) => {
        console.log(products);
        let newCart = [];
        const exists = cart.find((item) => item.id === products.id);
        if (!exists) {
            products.quantity = 1;
            newCart = [...cart, products];
        } else {
            const rest = cart.filter((item) => item.id !== products.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(products.id);
    };

    return (
        <div className="container-fluid text-bg-light">
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
