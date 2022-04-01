import styled from "styled-components";

export const StyledSongDetails = styled.div`
    padding: 130px 260px 100px;
    margin-bottom: -100px;
    display: flex;
    justify-content: space-evenly;
    white-space: pre-wrap;

    /* audio::-webkit-media-controls-panel {
        border-radius: 50%;
        background-color: blue;
    } */
    
    .details {
        height: 350px;
        align-self: center;
    }

    h1 {
        font-size: 50px;
        margin: 0;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    img {
        margin-bottom: 30px;
        border-radius: 15px;
    }

    img, audio {
        width: 350px;
    }

    div {
        position: relative;
    }

    .chorus {
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        min-width: max-content;
        align-items: center;
    }

    .quotes {
        width: 100px;
        margin-right: 20px;
        align-self: center;
        opacity: 0.5;
        margin-bottom: 0;
    }

    button {
        margin-bottom: 0;
    }

    .buttons {
        position: absolute;
        bottom: 0;
        flex-direction: row;
        float: inline-end;
    }

    /* .like {
        width: 60px;
        color: white;
    } */
`