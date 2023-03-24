import { createContext, useState } from "react";
import { iCartContext, iChildren, iComic } from "../interfaces";

export const CartContext = createContext<iCartContext>({
  currentSale: [],
  addToCart: () => {},
  deleteCart: () => {},
  cartItems: {},
  setCartItems: () => {},
  total: 0,
  setTotal: () => {},
});

const CartProvider = ({ children }: iChildren) => {
  const [currentSale, setCurrentSale] = useState<iComic[]>([]);
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState<number>(0);

  const addToCart = (comic: iComic) => {
    setCurrentSale([...currentSale, comic]);
  };

  const deleteCart = (index: number) => {
    const updatedSale = [...currentSale];
    updatedSale.splice(index, 1);
    setCurrentSale(updatedSale);
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        addToCart,
        deleteCart,
        cartItems,
        setCartItems,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
