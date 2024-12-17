import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";
import HomePage from "./pages/HomePage";
import ProductCategories from "./components/ProductCategories";
import Products from "./components/Product";
import ProductDetails from "./components/ProductDetails";

const App = () => (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/*<Route path="/categories" element={<ProductCategories />} />*/}
                <Route path="/products" element={<Products />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
            </Routes>
        </div>
    </Router>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
