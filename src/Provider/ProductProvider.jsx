import { useContext } from "react";
import { ProductContext } from "../Context";
import useProductData from "../Hooks/useProductData";

export const ProductProvider = ({ children }) => {
  const {products, categories, loading, error} = useProductData(); 
  return (
    <ProductContext.Provider value={{products, categories, loading, error}}>
      {children}
    </ProductContext.Provider>
  );
};


export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};