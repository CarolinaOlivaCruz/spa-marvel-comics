import React, { useContext } from "react";
import { iComic } from "../../../interfaces";
import { CartContext } from "../../../providers/cartContext";
import StyledListCart from "./style";
import deleteImg from "../../../assets/img/delete.png";
import AddressSearch from "../../../components/AddressSearch";

const ListCart = () => {
  const { Total, currentSale, deleteCart } = useContext(CartContext);

  return (
    <StyledListCart>
      {currentSale && currentSale.length > 0 ? (
        <>
          <ul>
            {currentSale.map((item: iComic, index: number) => {
              const img = `${item.images[0].path}.${item.images[0].extension}`;
              return (
                <li key={index}>
                  <div>
                    <img src={img} alt="Imagem do Produto" />
                    <h4>{item.title}</h4>
                  </div>
                  <div>
                    <p>R$ {item.prices[0].price}</p>
                    <button type="button" onClick={() => deleteCart(index)}>
                      <img src={deleteImg} alt="Lixeira" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <AddressSearch />
        </>
      ) : (
        <h3>Adicione itens ao carrinho</h3>
      )}

      <span>Total R$ {Total.toFixed(2)}</span>
    </StyledListCart>
  );
};

export default ListCart;
