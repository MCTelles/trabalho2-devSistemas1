import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

import type { IProduct } from "../interfaces";

interface ProductsContextType {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  selectedProducts: string[];
  setSelectedProducts: (selectedProducts: string[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

// Contexto padrão (para evitar erro ao usar useContext sem Provider)
export const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

// 4. Provider
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const { data } = await fetch(
          "../../../fakeAPI/fake_clothing_api.json"
        ).then((data) => data.json());

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    fetchProductList();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        selectedProducts,
        setSelectedProducts,
        loading,
        setLoading,
        cart,
        setCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
