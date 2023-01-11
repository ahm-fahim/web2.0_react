import React from 'react';
import styles from "./Products.module.css";

const Products = ({ item }) => {
    const { picture,price,name , gender} = item;
    return (
        <div className={styles.card}>
            <img src={picture} alt="" />
            <h1>{price}$</h1>
            <h3>{name}</h3>
            <small>Gender: {gender}</small>
            <button>Add To Cart +</button>
        </div>
    );
};

export default Products;