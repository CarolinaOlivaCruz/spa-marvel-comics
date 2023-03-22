import styled from "styled-components";

const StyledCards = styled.ul`
  width: 90%;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  li {
    width: 45%;
    height: 550px;
    margin: 0 auto;
    color: #ffff;
    display: flex;
    align-items: center;
    gap: 10px;
    
    section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background-color: #23252b;
      border-radius: 8px;

      div {
        width: 100%;
        height: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-bottom: 1px solid #ffff;
          border-radius: 8px 8px 0 0;
        }
      }
    }
  }
`;

const StyledContainer = styled.div`
  padding: 15px;
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;

  h4 {
    font-size: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  button {
    font-size: 30px;
    padding: 20px;
    border-radius: 32px;
    color: #ffff;
    background-color: #000;
  }
`;

export { StyledCards, StyledContainer };
