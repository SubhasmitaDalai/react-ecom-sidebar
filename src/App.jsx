import React, { useState, useMemo } from "react";
import { categories, products } from "./data/mockData";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Calculate item count per category for the sidebar badges
  const productCounts = useMemo(() => {
    const counts = { all: products.length };
    products.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter products based on active sidebar selection
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Get readable category name for the main header
  const activeCategoryName = useMemo(() => {
    const found = categories.find((c) => c.id === selectedCategory);
    return found ? found.name : "Products";
  }, [selectedCategory]);

  return (
    <div className="ecom-layout">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        productCounts={productCounts}
      />
      <ProductList
        products={filteredProducts}
        categoryName={activeCategoryName}
      />
    </div>
  );
}

export default App;