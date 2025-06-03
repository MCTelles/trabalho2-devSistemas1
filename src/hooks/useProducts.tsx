import { useContext } from "react";

import { ProductsContext } from "../contexts/ProductsContext";

// 5. Hook personalizado para consumir o contexto
export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProductsContext must be used within a ProductProvider");
  }

  return context;
};
