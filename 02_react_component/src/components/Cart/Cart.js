import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const itemList = props.item;

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="card m-2 d-flex justify-content-center">
                <div className="card-body">
                    <img
                        className="img-fluid"
                        src={itemList.strDrinkThumb}
                        alt=""
                    />
                    <h3 className="text-danger">{itemList.strDrink}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;
