import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
    const { handleAddToCart, products } = props;
    const { img, name, price, stock, seller } = products;

    return (
        <div className="col-md-4 col-lg-2 col-sm-6">
            <div className="card">
                <div className="card-body">
                    <img src={img} alt="Not Found!" className="img-fluid" />
                    <h6 className="text-dark">{name}</h6>
                    <h5>$ {price}</h5>
                    <div className="text-secondary shopName">
                        <small>In stock- {stock}</small>
                        <small className="px-2">| seller- {seller}</small>
                    </div>
                    <div className="btnPosition">
                        <button
                            onClick={() => handleAddToCart(products)}
                            className="btn btn-danger"
                        >
                            Add To Cart{" "}
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
