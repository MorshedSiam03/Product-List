import { useContext, useEffect, useState } from "react";
import SearchIconSvg from "../../assets/Svgs/SearchIconSvg";
import { SortFilterContext } from "../../Context";
import useDebounce from "../../Hooks/useDebounce";

function SearchProduct() {
  const { searchQuery, setSearchQuery } = useContext(SortFilterContext);
  const [inputValue, setInputValue] = useState(searchQuery);
  const debouncedSearchQuery = useDebounce(inputValue, 1000);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery, setSearchQuery]);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
      <SearchIconSvg />
      <input
        className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
        placeholder="Find anything..."
        aria-label="Search components"
        id="headlessui-combobox-input-:r5n:"
        role="combobox"
        type="text"
        aria-expanded="false"
        aria-autocomplete="list"
        style={{ caretColor: "rgb(107, 114, 128)" }}
        value={inputValue}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchProduct;
