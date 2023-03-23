import React, { useContext, useState } from "react";
import { StyledHeader } from "./style";
import imgCart from "../../assets/img/cart.png";
import imgSearch from "../../assets/img/search.png";
import { ComicsContext } from "../../providers/listComicsContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png"

const Header = () => {
  const { getComics, listComics, setListComics } = useContext(ComicsContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    filterCards(inputValue);
  };

  const filterCards = (searchValue: string) => {
    const filteredProducts = listComics.filter((item) =>
      item.title.toLowerCase().includes(searchValue)||
      item.variantDescription.toLowerCase().includes(searchValue)
    );

    filteredProducts.length > 0 ? setListComics(filteredProducts) : getComics();
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
          </button>
        </div>
      </section>
    </StyledHeader>
  );
};

export default Header;
