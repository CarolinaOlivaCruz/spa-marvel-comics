import React, { useContext } from "react";
import { ComicsContext } from "../../providers/listComicsContext";
import { StyledModal } from "./style";

const CardDetails = () => {
  const { setIsModal } = useContext(ComicsContext);

  return (
    <StyledModal>
      <div>
        <header>
          <button onClick={() => setIsModal(false)}>X</button>
        </header>
        <main>
          <h4>Title</h4>
          <button>Adicionar no carrinho</button>
        </main>
      </div>
    </StyledModal>
  );
};

export default CardDetails;
