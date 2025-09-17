import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// Extract search query from the URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResult() {
  const query = useQuery();
  const searchTerm = query.get("q") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          // Filter products based on title, category, or description
          const filtered = res.data.filter((p) =>
            (p.title + p.category + p.description)
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
          setProducts(filtered);
        })
        .catch((err) => console.error("Error fetching products:", err))
        .finally(() => setLoading(false));
    }
  }, [searchTerm]);

  if (loading) return <p className="p-6 text-center">Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">
        Search Results for:{" "}
        <span className="text-yellow-600">{searchTerm}</span>
      </h2>

      {/* If no products found */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No product found ❌</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-3"
              />
              <h3 className="font-medium text-center line-clamp-2">
                {product.title}
              </h3>
              <p className="text-yellow-600 font-semibold mt-2">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
