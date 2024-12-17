import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../service/ProductService";

const ProductDetails = () => {
    const { productId } = useParams(); // Extract productId from route params
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await productService.getProductById(productId);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch product details");
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="product-details-container p-4">
            {product ? (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-indigo-600">{product.name}</h2>
                    <p className="text-gray-700">{product.productDescription}</p>
                    <p className="text-gray-800 font-semibold">Price: ${product.price}</p>
                    <p className="text-gray-600">Stock: {product.stock}</p>
                    <p className="text-gray-600">Category: {product.categoryName}</p>
                </div>
            ) : (
                <div>No product found</div>
            )}
        </div>
    );
};

export default ProductDetails;
