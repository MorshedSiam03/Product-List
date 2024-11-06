// useProductData.js
import { useState, useEffect } from "react";

const useProductData = (sortOrder) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [sortOrder]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategories();
  }, []);

  return { products, categories, loading, error };
};

export default useProductData;
