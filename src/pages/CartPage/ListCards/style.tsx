import styled from "styled-components";

const StyledListCart = styled.section`
  width: 90%;
  margin: 30px auto;
  color: #ffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #23252b;
  border-radius: 8px;

  p {
    font-size: 30px;
    text-align: center;
    margin: 25% auto;
  }

  ul {
    width: 100%;
    max-height: 1000px;
    overflow: auto;
    scrollbar-width: initial;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    li {
      width: 100%;
      height: 80px;
      padding: 15px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #000;

      img {
        width: 60px;
      }
    }
  }

  span {
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
    font-weight: bold;

    @media (min-width: 900px) {
      font-size: 25px;
    }
  }
`;

export default StyledListCart;
