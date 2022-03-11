import styled from "styled-components";

export const StyledAlbumCard = styled.div`
    width: 22%;
    .album-container {
        /* background: none;
        border: 5px solid;
        font-size: 1rem;
        margin: 0.5rem;
        padding: 0.8rem 1.6rem;
        border-color: ${props => props.brColor || "#fff1e6"}; */

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
        height: auto;
    }

    button {
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
    }
    .album-container img{
        position: sticky;
        max-width:100%;
        height:auto;
    }
`