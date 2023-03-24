import React, { useState, useContext, useEffect } from "react";
import { ComicsContext } from "../../providers/listComicsContext";
import { StyledContainer, StyledCards } from "./style";
import notImage from "../../assets/img/not-image.png";

const ListComics = () => {
  const { listComics, setIsModal, setIsComic } = useContext(ComicsContext);

  const modalDetailsComic = (idComic: Number) => {
    const comicFind = listComics.find((item) => item.id === idComic);

    if (comicFind) {
      setIsModal(true);
      setIsComic(comicFind);
    }
  };

  return (
    <StyledCards>
      {listComics?.map((item) => {
        const { id, title, variantDescription, prices, images } = item;
        const img =
          images.length > 0
            ? images[0].path + "." + images[0].extension
            : notImage;

        return (
          <li key={id}>
            <section>
              <div>
                <img src={img} alt={variantDescription} />
              </div>
              <StyledContainer>
                <h4>{title}</h4>
                <p>{variantDescription}</p>
                <p>{prices[0].price}</p>
                <button type="button" onClick={() => modalDetailsComic(id)}>
                  Detalhes
                </button>
              </StyledContainer>
            </section>
          </li>
        );
      })}
    </StyledCards>
  );
};

export default ListComics;
