import styled from "styled-components";

export const StyledLanding = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    padding-top: 7%;

    h2, h2 * {
        display: flex;
        justify-content: center;
        font-family: 'Syne Tactile', cursive;
        font-size: 1.4em;
    }

    h2 * {
        max-width: max-content;
        margin: auto 7px;
        font-weight: bold;
        color: #ef6461;
        margin-top: -10px;
    }

    h3 {
        font-size: 1.7rem;
        font-weight: 200;
        margin-top: 60px;
    }

    .best-albums {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-self: center;
        flex-wrap: wrap;
        max-width: 75%;
    }
`