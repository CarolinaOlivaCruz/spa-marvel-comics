import styled from "styled-components";

const StyledModal = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  animation: show-background 0.8s ease;
  z-index: 3;
  background-color: #23252ba1;
  -webkit-animation: show-background 0.8s ease;
  display: flex;
  justify-content: center;

  @-webkit-keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: #23252ba1;
    }
  }

  @keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: #23252ba1;
    }
  }

  div {
    background-color: #000;
    animation: slide-bottom 0.7s ease;
    border-radius: 8px;
    max-width: 798px;
    margin: 20px;
    min-height: 318px;
    -webkit-animation: slide-bottom 0.7s ease;
    width: 100%;

    @-webkit-keyframes slide-bottom {
      0% {
        transform: translateY(-100px);
        -webkit-transform: translateY(-100px);
      }

      100% {
        transform: translateY(0);
        -webkit-transform: translateY(0);
      }
    }

    @keyframes slide-bottom {
      0% {
        transform: translateY(-100px);
        -webkit-transform: translateY(-100px);
      }

      100% {
        transform: translateY(0);
        -webkit-transform: translateY(0);
      }
    }

    header {
      width: 100%;
      background-color: #23252b;
      display: flex;
      justify-content: flex-end;
      padding: 10px 30px;
      border-bottom: 1px solid #ffff;

      button {
        color: #ffff;
        font-size: 25px;
      }
    }
  }
`;

export { StyledModal };
