// src/components/ProductCategories.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productCategoryService from "../service/ProductCategoryService";
import "./ProductCategories.css";

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await productCategoryService.fetchCategories();
                setCategories(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch categories");
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        // Navigate to the products page with category ID as query param
        navigate(`/products?categoryId=${categoryId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="category-container">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg cursor-pointer"
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <h2 className="text-xl font-bold text-indigo-600 mb-2">
                            {category.categoryName}
                        </h2>
                        <p className="text-gray-700">
                            {category.description || "No description available."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCategories;
