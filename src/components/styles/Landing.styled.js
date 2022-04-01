import styled from "styled-components";

export const StyledLanding = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    padding-top: 80px;

    h2, h2 * {
        font-family: 'Syne Tactile', cursive;
        font-size: 1.4em;
    }

    span {
        max-width: max-content;
        margin: auto 7px;
        font-weight: bold;
        color: #ef6461;
        margin-top: -10px;
    }

    a {
        align-self: center;
        max-width: max-content;
    }

    /* .heading {
        background-image: url('https://cdn3.pitchfork.com/longform/817/Overlooked_Summer2018-02.jpg');
        background-size: contain;
        background-position: center;
        width: 30%;
        margin-top: 20px;
        align-self: center;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    } */

    h3 {
        font-size: 2.3rem;
        font-weight: bold;
        width: 100%;
        line-height: 50px;
        font-family: 'Syne Tactile', cursive;
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