import styled from "styled-components";

export const StyledHeader = styled.header` 
    .header {
        align-items: center;
        justify-content: space-between;
        width: 100%;
        right: 0;
    }
    display: flex;
    position: fixed;
    justify-content: space-between;
    width: 100%;
    padding: 7px 30px;
    z-index: 1000;
    background-color: #1A1A1DBB;
    backdrop-filter: blur(2px);
    flex-wrap: wrap;

    .menu, .form-search, .burger-nav-links, .burger-button {
        display: none;
    }
    
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

    @media screen and (max-width: 1000px){
        /* height: 100%; */
        height: ${props => props.height || "auto"};
        backdrop-filter: blur(5px);
        .burger-button {
            background-color: none;
            border: none;
            opacity: 0.8;
        }
        .header {
            height: 80px;
        }
        h1 {
            font-size: 1.3rem;
        }
        img {
            width: 40px;
        }
        .burger-button {
            display: flex;
        }
        .burger-button:hover {
            cursor: pointer;
        }
        .menu, .close-menu{
            display: flex;
            width: 25px;
            margin-right: 0;
        }
        .nav-links {
            display: none;
        }
        .burger-nav-links {
            display: flex;
            width: 100%;
            margin-top: -50px;
        }
    }
    @media screen and (max-width: 800px){
        .header-search {
            display: none;
        }
    }

    /* .my-list::after {
        content: "11";
        margin-right: -10px;
    } */
`