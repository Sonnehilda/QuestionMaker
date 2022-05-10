import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 1.5vh;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 1.5vh;
        box-shadow: inset 0 0 1.5vh #a1a1a1;
    }

    html {
        margin: 0;
        padding: 0;

        max-width: 100vw;
        max-height: 100vh;

        overflow: overlay;
        overflow-x: hidden;

        -ms-user-select: none; 
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

`;

export default GlobalStyle;
