// src/context/SortFilterContext.js
import React, { useContext, useState } from "react";
import { SortFilterContext } from "../Context";

export const SortFilterProvider = ({ children }) => {
  const [sortOrder, setSortOrder] = useState();
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state
  const [isLoading, setIsLoading] = useState(false);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

const handleFilterChange = (newFilters) => {
    setIsLoading(true);
    setFilters(newFilters);
    setIsLoading(false);
  };

  const handleSearch = (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    setIsLoading(false);
  };

  return (
    <SortFilterContext.Provider
      value={{
        sortOrder,
        filters,
        searchQuery,
        setSearchQuery, 
        handleSortChange,
        handleFilterChange,
        isLoading, 
        handleSearch, 
      }}
    >
      {children}
    </SortFilterContext.Provider>
  );
};


export const useSortFilter = () => {
    const context = useContext(SortFilterContext);
    if (context === undefined) {
      throw new Error("useSortFilter must be used within a SortFilterProvider");
    }
    return context;
  };