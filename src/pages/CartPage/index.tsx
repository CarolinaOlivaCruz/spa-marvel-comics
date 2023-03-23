import { useNavigate } from "react-router-dom";
import { StyledHeader } from "../../components/Header/style";
import StyledButton from "./style";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledHeader>
        <StyledButton type="button" onClick={() => navigate("/")}>
          Marvel
        </StyledButton>
      </StyledHeader>
    </>
  );
};

export default Cart;
