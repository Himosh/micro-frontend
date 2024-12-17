// src/service/ProductService.js
import ApiService from "./ApiService";

class ProductService {
    constructor() {
        this.apiService = new ApiService("/products"); // Specific base path
    }

    fetchProductsByCategoryId(categoryId, page = 0, size = 10) {
        return this.apiService.get(
            `/search-by-category-id?categoryId=${categoryId}&page=${page}&size=${size}`
        );
    }

    getProductById(productId) {
        return this.apiService.get(`/${productId}`);
    }
}

const productService = new ProductService();
export default productService;
