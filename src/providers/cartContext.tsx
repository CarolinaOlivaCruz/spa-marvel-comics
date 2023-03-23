import { createContext, useState } from "react";
import { iCartContext, iChildren, iComic } from "../interfaces";

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iChildren) => {
  const [currentSale, setCurrentSale] = useState<iComic[]>([] as iComic[]);
  
  const addCart = (data: iComic) => {
    setCurrentSale([...currentSale, data]);
  };

  const deleteCart = (indexKey: number) => {
    const newList = currentSale.filter((item, index) => index !== indexKey);
    setCurrentSale(newList);
  };

  const Total = currentSale.reduce((acc, currentValue) => {
    return acc + currentValue.prices[0].price;
  }, 0);
 

  return (
    <CartContext.Provider
      value={{
        currentSale,
        setCurrentSale,
        addCart,
        deleteCart,
        Total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
