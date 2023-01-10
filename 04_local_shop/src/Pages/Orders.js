import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const Orders = () => {
    const { products, innitailCart } = useLoaderData();
    return (
        <MainLayout>
            <h1>Orders {products.length}</h1>
            <h1>Orders {innitailCart.length}</h1>
        </MainLayout>
    );
};

export default Orders;