import React, { useContext, useState } from "react";
import FilterSvg from "../../assets/Svgs/FilterSvg";
import { SortFilterContext } from "../../Context";

function FilterProduct({ categories }) {
  const { filters, handleFilterChange } = useContext(SortFilterContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    const updatedFilters = { [category]: !filters[category] };
    if (filters[category]) {
      handleFilterChange({});
    } else {
      handleFilterChange(updatedFilters);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter
          <FilterSvg />
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div>
            {categories.map((category) => (
              <label
                key={category}
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={filters[category] || false} // Manage the checked state
                  onChange={() => handleCategoryChange(category)} // Call the handler on change
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">{category}</span>
              </label>
            ))}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterProduct;
