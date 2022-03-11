import styled from "styled-components";

export const StyledHeader = styled.header`    
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 98%;
    z-index: 1000;
    background-color: #1A1A1DBB;
    backdrop-filter: blur(2px);
    margin-top: -8px;
    
    div {
        display: flex;
        align-items: center;
    }

    img {
        margin: auto 20px
    }

    h1 {
        font-family: 'Syne Tactile', cursive;
        font-size: 1.5em;
    }
`