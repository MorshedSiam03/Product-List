import React, { useContext, useState } from "react";
import SortSvg from "../../assets/Svgs/SortSvg";
import { SortFilterContext } from "../../Context";

function SortProduct() {
  const { sortOrder, handleSortChange } = useContext(SortFilterContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const getSortLabel = () => {
    if (sortOrder === "lowToHigh") return "Low to High";
    if (sortOrder === "highToLow") return "High to Low";
    return "";
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          Sort: {getSortLabel()}
          <SortSvg />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div className="py-1" role="none">
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              onClick={() => {
                handleSortChange("lowToHigh");
                toggleDropdown();
              }}
            >
              Low to High
            </span>
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              onClick={() => {
                handleSortChange("highToLow");
                toggleDropdown();
              }}
            >
              High to Low
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SortProduct;
