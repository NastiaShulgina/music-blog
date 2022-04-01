import styled from "styled-components";

export const StyledSongCard = styled.div`
    white-space: pre-wrap;
    width: 15%;

    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    max-width: 300px;
    margin: 10px 40px;
    text-align: center;
    min-height: max-content;
    font-size: 1rem;

    position: relative;
    /* background-color: ${({ theme }) => theme.colors.burgundy + 'AA'}; */

    & h2 {
        font-family: 'Syne Tactile', cursive;
        font-weight: 200;
        margin: 10px auto;
        /* color: ${({ theme }) => theme.colors.rose}; */
    }

    p {
        font-size: 0.9rem;
        text-overflow: ellipsis;
        height: 140px;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin: auto 10px;
    }

    button {
        font-weight: 600;
        min-width: 100%;
        display: block;
        margin: 0;
        position: absolute;
        bottom: 0;
    }

    /* button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }

    button:hover {
        opacity: 0.7;
    } */
    img{
        position: sticky;
        max-width: 100%;
        height:auto;
    }
`