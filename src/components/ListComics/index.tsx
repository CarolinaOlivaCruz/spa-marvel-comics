import { useContext } from "react";
import { ComicsContext } from "../../providers/listComicsContext";
import StyledCards from "./style";

const ListComics = () => {
  const { listComics } = useContext(ComicsContext);
  return (
    <StyledCards>
      {listComics?.map((item) => {
        const { id, title, variantDescription, prices, images } = item;
        const img =
          images.length > 0 ? images[0].path + "." + images[0].extension : "";
       console.log(id, title);
       
        return (
          <li key={id}>
            <div>
              <div>
                <img src={img} alt={variantDescription} />
              </div>
              <div>
                <h4>{title}</h4>
                <p>{variantDescription}</p>
                <p>{prices[0].price}</p>
                <button type="button">Ver</button>
              </div>
            </div>
          </li>
        );
      })}
    </StyledCards>
  );
};

export default ListComics;
