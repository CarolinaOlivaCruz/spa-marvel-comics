import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  
  margin: 0 auto;
  background-color: #000;
  margin-top: 20px;
  border-radius: 8px;

  p {
    font-size: 25px;
    padding: 10px 20px;
  }

  form {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    font-size: 25px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        width: 60%;
        padding: 20px;
        background-color: #ffff;
        font-size: 25px;
        border-radius: 8px;
      }

      img {
        width: 40px;
      }
    }

    label {
      color: #ffff;
    }
  }
`;

export default StyledContainer;
