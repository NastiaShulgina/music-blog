import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap');

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        /* max-width: max-content; */
    }

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.darkGrey};
        font-family: 'Fira Sans', sans-serif;
        font-size: 20px;
        font-weight: lighter;
        color: #fff1e6;
        width: 100%;
    }

    hr {
        margin: 20px 0;
        padding: 0;
        height: 0;
        border: none;
        border-top: 1px solid #333
    }
`

export default GlobalStyles;