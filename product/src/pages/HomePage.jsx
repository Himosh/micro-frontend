import React from 'react';
import Navbar from "../components/Navbar";
import ProductCategories from "../components/ProductCategories";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="text-3xl font-bold text-center mt-8">Welcome to My E-Commerce</h1>
            <h2 className="text-xl text-center mt-4">Choose a category to start shopping</h2>
            <ProductCategories/>
        </div>
    );
};

export default HomePage;