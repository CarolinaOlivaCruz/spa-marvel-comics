import React, { useContext } from "react";
import { ComicsContext } from "../../providers/listComicsContext";
import { StyledModal } from "./style";
import notImage from "../../assets/img/not-image.png";
import { iCreator } from "../../interfaces";

const CardDetails = () => {
  const { setIsModal, isComic } = useContext(ComicsContext);
  const comicImage =
    isComic?.images.length > 0
      ? `${isComic?.images[0].path}.${isComic?.images[0].extension}`
      : notImage;

  return (
    <StyledModal>
      <div>
        <header>
          <button onClick={() => setIsModal(false)}>X</button>
        </header>
        <main>
          <img src={comicImage} alt={isComic?.title} />
          <h2>{isComic?.title}</h2>
          <article>
            <h3>{isComic?.description}</h3>
            {isComic?.creators && Array.isArray(isComic?.creators) && (
              <ul>
                {isComic?.creators.map((creator: iCreator, index: number) => {
                  const { name, role } = creator;

                  let nameAndRole = `${name} - ${role}`;

                  return (
                    <li key={index}>
                      <p>{nameAndRole}</p>
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
            <span>{isComic?.prices[0].price}</span>
          </article>
          <button>Adicionar no carrinho</button>
        </main>
      </div>
    </StyledModal>
  );
};

export default CardDetails;
