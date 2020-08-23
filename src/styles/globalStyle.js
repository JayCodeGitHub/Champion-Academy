import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-border-box;
    }
    body {
        margin: 0;
        font-family: 'Lato';
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle