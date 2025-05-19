import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    axios
      .get("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Mapping of product names to categories
  const categoryMap = {
    "DigitalNest Hoodie": "Apparel",
    "Developer Mug": "Accessories",
    "Laptop Backpack": "Accessories",
    "Wireless Mouse": "Electronics",
  };

  const categories = ["All Categories", "Apparel", "Accessories", "Electronics"];

  const productsWithCategory = products.map((product) => ({
    ...product,
    category: categoryMap[product.name] || "Uncategorized",
  }));

  const filteredProducts =
    selectedCategory === "All Categories"
      ? productsWithCategory
      : productsWithCategory.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Products</h2>
        <label htmlFor="category-filter" className="mr-2 font-semibold">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-2 py-1 rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
