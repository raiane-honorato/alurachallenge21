import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0; 
}

body {
    background-color: ${ ({ theme }) => theme.colors.primary}
}

`