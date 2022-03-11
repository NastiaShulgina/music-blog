import styled from "styled-components";

export const StyledFooter = styled.footer`
    font-family: 'Fira Sans', sans-serif;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    color: #fff1e6;
    align-self: center;
    height: 500px;
    padding-top: 440px;

    background-image: url(./concert.png);
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 98%;
        padding: 10px;
        max-height: 120px;
        background-color: #1A1A1DAA;
        backdrop-filter: blur(2px);
    }

    .branding {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 50px;
    }

    .social-media {
        display: flex;
        justify-content: center;
    }

    .social-media * {
        height: 32px;
    }

    img:first-child {
        padding-right: 10px;
    }
`