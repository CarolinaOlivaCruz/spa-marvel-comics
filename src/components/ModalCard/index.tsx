import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ComicsContext } from "../../providers/listComicsContext";
import { StyledModal } from "./style";
import notImage from "../../assets/img/not-image.png";
import { iCreator } from "../../interfaces";
import { CartContext } from "../../providers/cartContext";

const CardDetails = () => {
  const { setIsModal, isComic } = useContext(ComicsContext);
  const { addCart } = useContext(CartContext);

  const comicImage =
    isComic?.images.length > 0
      ? `${isComic?.images[0].path}.${isComic?.images[0].extension}`
      : notImage;

  const handleAddToCart = () => {
    try {
      if (isComic) {
        addCart(isComic);
        setIsModal(false);
        toast.success("Adicionado com sucesso");
      }
    } catch (error) {
      toast.error("Ops! Tente novamente");
    }
  };

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
          <button type="button" onClick={handleAddToCart}>
            Adicionar no carrinho
          </button>
        </main>
      </div>
    </StyledModal>
  );
};

export default CardDetails;
