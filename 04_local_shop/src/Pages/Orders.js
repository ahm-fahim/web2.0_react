import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import MainLayout from '../layout/MainLayout';

const Orders = () => {
    const {innitailCart } = useLoaderData();
    return (
        <MainLayout>
            <div className="container">
                <Cart cart={innitailCart}></Cart>
            </div>
        </MainLayout>
    );
};

export default Orders;