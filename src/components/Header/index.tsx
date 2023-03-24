import React, { useContext, useState } from "react";
import { StyledHeader } from "./style";
import imgCart from "../../assets/img/cart.png";
import imgSearch from "../../assets/img/search.png";
import { ComicsContext } from "../../providers/listComicsContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { CartContext } from "../../providers/cartContext";

const Header = () => {
  const { listComics, setListComics } = useContext(ComicsContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { currentSale } = useContext(CartContext);
  const cartItemCount = currentSale.length;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    filterCards();
  };

  const filterCards = () => {
    const filteredProducts = inputValue
      ? listComics.filter(
          (item) =>
            item.title.toLowerCase().includes(inputValue) ||
            item.variantDescription.toLowerCase().includes(inputValue)
        )
      : listComics;
    setListComics(filteredProducts);
    if (!inputValue) {
      window.location.reload();
    }
  };

  return (
    <StyledHeader onSubmit={handleSubmit}>
      <section>
        <img src={logo} alt="" />
        <div>
          <form>
            <input
              type="text"
              placeholder="Buscar..."
              value={inputValue}
              onChange={(event) =>
                setInputValue(event.target.value.toLowerCase())
              }
            ></input>
            <button type="submit">
              <img src={imgSearch} alt="Buscar" />
            </button>
          </form>
          <button type="button" onClick={() => navigate("/cart")}>
            <img src={imgCart} alt="Carrinho" />
            {cartItemCount > 0 && <span>{String(cartItemCount)}</span>}
          </button>
        </div>
      </section>
    </StyledHeader>
  );
};

export default Header;
