import styled from "styled-components";

export const StyledToListen = styled.div`
    padding: 100px 30px;
    display: flex;
    justify-content: space-around;
    max-width: 100%;
    
    .playing-now {
        display: flex;
        margin: 30px;
    }

    .right {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
    }

    .selections {
        /* margin-left: -80px; */
        min-width: 30%;

    }

    button {
        width: 100px;
        height: 100px;
        overflow: hidden;
        background-color: #1A1A1D;
        border: none;
        opacity: 0.8;
        border-radius: 100%;
    }

    .open-selection {
        position: fixed;
        left: 0;
        top: 46%;
    }

    .close-selection {
        margin-top: 30px;
        margin-right: 45px;
    }

    .close-selection, .close {
        width: 32px;
        height: 32px;
        border-radius: 0;
        padding: 0;
        top: 0;
        float: right;
    }

    .open-selection:hover, .close-selection:hover {
        cursor: pointer;
        left: 0.5%;
    }

    audio {
        width: 500px;
    }

    hr {
        margin: 5px 0;
    }

    .now-image {
        width: 250px;
        height: 250px;
        border-radius: 100%;
    }

    .notes {
        width: 200px;
        position: absolute;
        margin: -170px 1px 40px 500px;
    }

    i {
        font-size: 1.5rem;
    }

    h2 {
        font-weight: 100;
    }
`