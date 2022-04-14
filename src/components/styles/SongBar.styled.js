import styled from "styled-components"

export const StyledSongBar = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1000px;
    justify-content: space-evenly;

    hr {
        margin: 5px 0;
    }

    .song-line {
        display: flex;
        flex-direction: row;
        align-self: center;
        min-width: 1000px;
        justify-content: space-between;
    }

    img {
        width: 100px;
        height: 100px;
        margin-right: 20px;
        align-self: center;
    }

    .album {
        margin-left: 40px;
    }

    .name-artist {
        width: 90%;
        align-self: center;
    }

    h4 {
        width: 40%;
        font-size: 0.95rem;
        font-weight: 100;
        align-self: center;
    }

    button {
        overflow: hidden;
        background-color: #1A1A1D;
        border: none;
        align-self: center;
    }

    .delete {
        height: 32px;
    }

    button:hover {
        cursor: pointer;
    }

    .cross{
        width: 32px;
        height: 32px;
    }

    .play, .pause {
        padding: auto 30px 0;
        width: 40px;
        height: auto;
    }
`