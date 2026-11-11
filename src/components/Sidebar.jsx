import React from "react";

const Sidebar = ({ categories, selectedCategory, onSelectCategory, productCounts }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul className="category-list">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <li key={cat.id}>
              <button
                className={`category-btn ${isActive ? "active" : ""}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <span>{cat.name}</span>
                <span className="count-badge">{productCounts[cat.id] || 0}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;