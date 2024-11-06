import React from "react";
import FilterProduct from "./FilterProduct";
import SortProduct from "./SortProduct";
import SearchProduct from "./SearchProduct";
import ProductCart from "./ProductCart";
import ProductCard from "./ProductCard";
import { useProductContext } from "../../Provider/ProductProvider";
import { useSortFilter } from "../../Provider/SortFilterProvider";
import InvalidIcon from "../../assets/Svgs/InvalidIcon";

function ProductList() {
  const { products, categories, loading, error } = useProductContext();
  const { filters, sortOrder, searchQuery, isLoading } = useSortFilter();

  const filteredProducts = products.filter(product => {
    const matchesFilter = Object.keys(filters).length === 0 || filters[product.category];
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const isLoadingData = loading || isLoading; 

  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            New Arrivals
          </h1>
          <p className="mt-4 text-xl text-gray-500 text-center">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="w-full">
              <SortProduct />
              <FilterProduct categories={categories} />
            </div>
            <div className="flex gap-2 items-center">
              <SearchProduct />
              <ProductCart />
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {isLoadingData ? (
                [...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow animate-pulse"
                  >
                    <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-10 bg-gray-300 rounded"></div>
                  </div>
                ))
              ) : error ? (
                <div className="col-span-4 text-center">
                  <div className="flex items-center justify-center p-4 border border-red-400 bg-red-100 text-red-600 rounded-lg shadow-md">
                    <InvalidIcon/>
                    <span>Error: {error}</span>
                  </div>
                </div>
              ) : (
                sortedProducts.length > 0 ? (
                  sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                    <div className="col-span-4 text-center">
                  <div className="flex items-center justify-center p-4 border border-gray-400 bg-gray-100 text-gray-600 rounded-lg shadow-md">
                    <InvalidIcon/>
                    <span>No products found.</span>
                  </div>
                </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
