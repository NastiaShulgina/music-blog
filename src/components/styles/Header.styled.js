import styled from "styled-components";

export const StyledHeader = styled.header`    
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 96%;
    padding: 7px 30px;
    z-index: 1000;
    background-color: #1A1A1DBB;
    backdrop-filter: blur(2px);
    
    input {
        background-color: ${({ theme }) => theme.colors.lilac};
        padding-left: 5px;
        border: none;
        font-size: 16px;
        width: 200px;
    }

    input::placeholder, input {
        color: ${({ theme }) => theme.colors.lightPink};
        height: 40px;
        font-size: 17px;
    }

    div {
        display: flex;
        align-items: center;
    }

    img {
        margin-right: 20px;
    }

    h1 {
        font-family: 'Syne Tactile', cursive;
        font-size: 1.5em;
    }

    /* .my-list::after {
        content: "11";
        margin-right: -10px;
    } */
`