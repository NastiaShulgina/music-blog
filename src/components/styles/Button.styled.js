import styled from "styled-components";

export const StyledButton = styled.button`
    background: none;
    border: 5px solid;
    font-size: 1rem;
    margin: 0.5rem;
    padding: 0.8rem 1.6rem;
    transition: 0.25s;
    border-color: ${props => props.brColor || "#fff1e6"};
    background-color: ${props => props.bgColor || "none"};
    color: ${props => props.color || "#fff1e6"};
    max-width: ${props => props.maxWidth || "100%"};
    align-self: ${props => props.alignSelf || "center"};

    &:hover { 
        cursor: pointer;
        transform: translateY(-0.25em);
    }
`