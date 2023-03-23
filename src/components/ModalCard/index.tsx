import React, { useContext } from "react";
import { ComicsContext } from "../../providers/listComicsContext";
import { StyledModal } from "./style";
import notImage from "../../assets/img/not-image.png";
import { iCreator } from "../../interfaces";

const CardDetails = () => {
  const { setIsModal, isComic } = useContext(ComicsContext);
  console.log(isComic);
  const img =
    isComic?.images.length > 0
      ? isComic?.images[0].path + "." + isComic?.images[0].extension
      : notImage;

  return (
    <StyledModal>
      <div>
        <header>
          <button onClick={() => setIsModal(false)}>X</button>
        </header>
        <main>
          <img src={img} alt="" />
          <h4>{isComic?.title}</h4>
          <article>
            <p>{isComic?.description}</p>
            <p>{isComic?.prices[0].price}</p>
            {isComic?.creators && Array.isArray(isComic?.creators) && (
              <ul>
                {isComic?.creators.map((creator: iCreator, index: number) => {
                  const { name, role } = creator;
                  return (
                    <li key={index}>
                      <p>{name}</p>
                      <p>{role}</p>
                    </li>
                  );
                })}
              </ul>
            )}
            {isComic?.characters.items &&
              Array.isArray(isComic?.characters.items) && (
                <ul>
                  {isComic?.characters.items.map((item: { name: string }) => (
                    <li key={item.name}>
                      <p>{item.name}</p>
                    </li>
                  ))}
                </ul>
              )}
          </article>
          <button>Adicionar no carrinho</button>
        </main>
      </div>
    </StyledModal>
  );
};

export default CardDetails;
