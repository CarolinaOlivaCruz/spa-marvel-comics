import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
  }

  body{
  position: relative;
  background-color: #000;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }
  
  ul,
  ol,
  li {
    list-style: none;
  }

  input, textarea, select {
    outline: 0;
    border: 0;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`;

export default GlobalStyle;
