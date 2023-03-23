import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  color: #ffff;
  background-color: #23252b;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    width: 88%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    gap: 5px;

    img {
      width: 250px;
      height: 85px;
      margin-top: 10px;
      object-fit: cover;
    }

    h1 {
      font-size: 50px;
    }

    div {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      img {
        width: 60px;
        height: 100%;
        margin: 0;
        object-fit: cover;
      }

      form {
        width: 80%;
        height: 100%;
        padding: 5px;
        background-color: #3e3e3e;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 8px;

        input {
          width: 85%;
          height: 100%;
          font-size: 30px;
          color: #ffff;
          background-color: #3e3e3e;
        }

        img {
          width: 40px;
        }
      }
    }
  }

  @media (min-width: 700px) {
    height: 150px;
  }
`;
