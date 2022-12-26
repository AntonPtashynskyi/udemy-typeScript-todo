import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Unbounded', cursive;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    color: ${({ theme }) => theme.primaryTextColor};
    overflow: hidden;
  }

`;
