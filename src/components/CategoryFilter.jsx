
import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    // Container for the category buttons, using flex layout and padding
    <div className="flex flex-wrap justify-center gap-3 p-4">
      <button
        className={`px-4 py-2 rounded-lg font-medium transition ${
          selectedCategory === "all"
            ? "bg-yellow-500 text-white shadow"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => onSelectCategory("all")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat} // Unique key for React rendering
          className={`px-4 py-2 rounded-lg font-medium transition ${
            selectedCategory === cat
              ? "bg-yellow-500 text-white shadow" // Highlight selected category
              : "bg-gray-200 hover:bg-gray-300"   // Default button style
          }`}
          onClick={() => onSelectCategory(cat)}  // Trigger filter for selected category
        >
          {cat}    
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;