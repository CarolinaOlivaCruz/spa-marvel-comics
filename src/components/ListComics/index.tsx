import { useContext } from "react";
import { ComicsContext } from "../../providers/listComicsContext";
import {StyledContainer, StyledCards} from "./style";
import notImage from "../../assets/img/not-image.png"

const ListComics = () => {
  const { listComics } = useContext(ComicsContext);
  return (
    <StyledCards>
      {listComics?.map((item) => {
        const { id, title, variantDescription, prices, images } = item;
        const img =
          images.length > 0 ? images[0].path + "." + images[0].extension : notImage;
       console.log(id, title);
       
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
                <button type="button">Detalhes</button>
              </StyledContainer>
            </section>
          </li>
        );
      })}
    </StyledCards>
  );
};

export default ListComics;
