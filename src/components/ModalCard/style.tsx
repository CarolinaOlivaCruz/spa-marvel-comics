import styled from "styled-components";

const StyledModal = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  animation: show-background 0.8s ease;
  z-index: 3;
  background-color: #23252ba1;
  color: #ffff;
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
    width: 100%;
    max-width: 798px;
    margin: 20px;
    min-height: 318px;
    -webkit-animation: slide-bottom 0.7s ease;

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

    main {
      width: 100%;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      h2 {
        margin-top: 20px;
        text-align: center;
        font-size: 30px;
      }

      article {
        width: 90%;
        margin: 30px auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

        h3 {
          text-align: center;
        }

        li {
          display: inline-block;
        }

        span {
          margin: 30px;
          font-size: 30px;
        }
      }

      button {
        width: 50%;
        padding: 15px;
        border-radius: 8px;
        margin: 0 auto;
        color: #ffff;
        background-color: #ec1d24;
        font-size: 25px;
      }
    }
  }
`;

export { StyledModal };
