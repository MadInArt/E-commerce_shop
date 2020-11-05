import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body{
    font-family: 'Oswald', sans-serif;
    padding: 30px 50px;

    @media screen and (max-width:800px){
        padding: 10px;
    }
  }
  a{
    text-decoration: none;
    color:black;
  }
  * {
    box-sizing: border-box;
  }`;
