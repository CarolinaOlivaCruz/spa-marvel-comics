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

  h3 {
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
      padding: 15px 25px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #000;

      div {
        padding: 0 5px;
        display: flex;
        align-items: center;
        gap: 10px;

        h4 {
          max-width: 50ch;
        }

        p {
          margin: 0 15px;
          font-size: 30px;
        }
      }

      img {
        width: 40px;
      }
    }
  }

  span {
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
    font-weight: bold;

    @media (min-width: 900px) {
      margin-right: 15px;
      font-size: 30px;
    }
  }
`;

export default StyledListCart;
