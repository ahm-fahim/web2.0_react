import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Coktail = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
        )
            .then((res) => res.json())
            .then((data) => setItems(data.drinks));
    }, []);
    return (
        <div className="container">
            <div className="row pt-5 mt-4">
                {items.map((item, key) => (
                    <Cart item={item} key={key}></Cart>
                ))}
            </div>
        </div>
    );
};

export default Coktail;
