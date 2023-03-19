import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: Montserrat, sans-serif;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;