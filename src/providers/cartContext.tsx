import { createContext, useState } from "react";
import { iCartContext, iChildren, iComic } from "../interfaces";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iChildren) => {
  const [currentSale, setCurrentSale] = useState<iComic[]>([] as iComic[]);

  const addCart = (data: iComic) => {
    setCurrentSale([...currentSale, data]);
  };

  const deleteCart = (indexKey: number) => {
    try {
      const newList = currentSale.filter((item, index) => index !== indexKey);
      setCurrentSale(newList);
      toast.success("Removido com sucesso");
    } catch (error) {
      toast.success("Ops! Tente novamente");
    }
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
