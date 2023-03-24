import React from "react";
import arrowImg from "../../assets/img/arrow.png";
import StyledContainerButton from "./style";

const ButtonArrow = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledContainerButton>
      <button type="button" onClick={handleScrollToTop}>
        <img src={arrowImg} alt="Seta indicando subir ao topo" />
      </button>
    </StyledContainerButton>
  );
};

export default ButtonArrow;
