import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, categoryName }) => {
  return (
    <main className="main-content">
      <div className="content-header">
        <h1>{categoryName}</h1>
        <p>{products.length} {products.length === 1 ? "item" : "items"} found</p>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">No products available in this category.</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductList;