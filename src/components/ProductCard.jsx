import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-meta">
          <span className="product-price">₹{product.price.toLocaleString("en-IN")}</span>
          <span className="product-rating">★ {product.rating}</span>
        </div>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;