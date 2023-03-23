import React, { useContext } from "react";
import { iComic } from "../../../interfaces";
import { CartContext } from "../../../providers/cartContext";
import StyledListCart from "./style";

const ListCart = () => {
  const {Total, currentSale, deleteCart } = useContext(CartContext);

  return (
    <StyledListCart>
      {currentSale && currentSale.length > 0 ? (
        <ul>
          {currentSale.map((item: iComic, index: number) => (
            <li key={index}>
              <div>
                <img src="" alt="Imagem do Produto" />
                <div>
                  <h4>{item.title}</h4>
                </div>
              </div>
              <button type="button" onClick={() => deleteCart(index)}>
                <img src="" alt="Lixeira" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Adicione itens ao carrinho</p>
      )}

      <span>Total R$ {Total.toFixed(2)}</span>
    </StyledListCart>
  );
};

export default ListCart;
