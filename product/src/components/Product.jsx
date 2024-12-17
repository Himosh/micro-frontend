// src/components/Products.js
import React, { useEffect, useState } from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import productService from "../service/ProductService";
import { navigate } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams(); // To get query parameters

    const categoryId = searchParams.get("categoryId"); // Extract categoryId

    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productService.fetchProductsByCategoryId(categoryId);
                setProducts(response.data.content); // Set product content
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch products");
                setLoading(false);
            }
        };

        if (categoryId) {
            fetchProducts();
        }
    }, [categoryId]);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4" >
            {products.map((product) => (
                <div key={product.productId} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg"
                     onClick={() => handleProductClick(product.productId)}
                >
                    <h3 className="text-lg font-bold text-indigo-600">{product.name}</h3>
                    <p className="text-gray-600">{product.productDescription}</p>
                    <p className="text-gray-800 font-semibold mt-2">Price: ${product.price}</p>
                    <p className="text-gray-600">Stock: {product.stock}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;
