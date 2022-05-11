import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    #root {
        height: 0;
    }

    html, body {
        margin: 0;
        padding: 0;

        max-width: 100vw;
        min-height: 100vh;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        overflow: overlay;
        overflow-x: hidden;
        -ms-user-select: none; 
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

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
`;

export default GlobalStyle;
