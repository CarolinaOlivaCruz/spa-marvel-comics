import styled from "styled-components";

const StyledCards = styled.ul`
  width: 90%;
  overflow: auto;
  scrollbar-width: initial;
  margin: 30px auto;
  display: flex;
  justify-content: left;
  gap: 10px;

  li {
    min-width: 300px;
    height: 346px;
    color: #ffff;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledCards;
