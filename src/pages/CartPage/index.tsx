import { useNavigate } from "react-router-dom";
import { StyledHeader } from "../../components/Header/style";
import ListCart from "./ListCards";
import StyledButton from "./style";
import logo from "../../assets/img/logo.png"
import AddressSearch from "../../components/AddressSearch";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledHeader>
        <StyledButton type="button" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </StyledButton>
      </StyledHeader>
      <main>
        <ListCart />
        
      </main>
    </>
  );
};

export default Cart;
