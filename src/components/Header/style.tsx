import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 5px 3px 3px #e0e0e0;

  section {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    div {
      display: flex;
      gap: 10px;
    }

    form {
      padding: 10px 15px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #f5f5f5b5;

      input {
        background-color: #f5f5f5b5;
        border: none;
      }
    }
  }

  @media (min-width: 600px) {
    section {
      width: 90%;
      flex-direction: row;
      gap: 50px;
    }
  }
`;
