import React, { useState } from "react";
import productCategoryService from "../services/ProductCategoryService";

const CreateCategoryForm = () => {
    // State to hold user input
    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState("");

    // Handle input change for category name
    const handleCategoryNameChange = (e) => setCategoryName(e.target.value);

    // Handle input change for description
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    // Handle form submission to create category
    const handleCreateCategory = async (e) => {
        e.preventDefault();

        // Prepare the category object with user input
        const newCategory = {
            categoryName,      // From input field
            description,       // From input field
        };

        try {
            // Call the createCategory service with the data
            await productCategoryService.createCategory(newCategory);
            setSuccess("Category created successfully!");
            setError(null); // Clear any previous error
        } catch (error) {
            setError("Failed to create category. Please try again.");
            setSuccess(null); // Clear any previous success message
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Create New Category</h2>

            {/* Display error or success messages */}
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}

            {/* Category creation form */}
            <form onSubmit={handleCreateCategory}>
                <div className="mb-4">
                    <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="categoryName"
                        value={categoryName}
                        onChange={handleCategoryNameChange}
                        className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description (optional)
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700">
                    Create Category
                </button>
            </form>
        </div>
    );
};

export default CreateCategoryForm;
