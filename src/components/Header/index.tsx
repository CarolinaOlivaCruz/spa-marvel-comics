import React from "react";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <section>
        <h1>Marvel</h1>
        <div>
          <form>
            <input type="text" placeholder="Digitar Pesquisa"></input>
            <button type="submit">
              <img alt="Buscar" />
            </button>
          </form>
          <button type="button">
            <img alt="Carrinho" />
          </button>
        </div>
      </section>
    </StyledHeader>
  );
};

export default Header;
