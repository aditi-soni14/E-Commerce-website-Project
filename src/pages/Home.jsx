 import React, { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import CategoryFilter from "../Components/CategoryFilter";

function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // change as needed

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  // Get unique categories from products
  const categories = [...new Set(items.map((p) => p.category))];

  // Filter products
  const filteredProducts =
    selectedCategory === "all"
      ? items
      : items.filter((p) => p.category === selectedCategory);

  // Pagination logic (only when category = all)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    selectedCategory === "all"
      ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
      : filteredProducts;

  const totalPages =
    selectedCategory === "all"
      ? Math.ceil(filteredProducts.length / productsPerPage)
      : 1;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Banner />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1); // reset page when category changes
        }}
      />
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination (only for All products) */}
      {selectedCategory === "all" && totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 my-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <span className="font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;