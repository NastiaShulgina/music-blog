import styled from "styled-components";

export const StyledToListen = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: center;
    
    .playing-now {
        display: flex;
        margin: 30px;
    }

    .right {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
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