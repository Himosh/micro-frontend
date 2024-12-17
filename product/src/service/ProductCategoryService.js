// src/services/ProductCategoryService.js
import ApiService from "./ApiService";

class ProductCategoryService {
    constructor() {
        this.apiService = new ApiService("/product-category"); // Specific base path
    }

    fetchCategories() {
        return this.apiService.get("/categories");
    }

    createCategory(category) {
        return this.apiService.post("/category", category);
    }

    updateCategory(category) {
        return this.apiService.post("/category/update", category);
    }

    deleteCategory(categoryId) {
        return this.apiService.delete(`/category/delete/${categoryId}`);
    }
}

const productCategoryService = new ProductCategoryService();
export default productCategoryService;
