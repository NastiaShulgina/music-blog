import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    label, p {
        padding-right: 10px;
        font-size: 17px;
    }

    select {
        background-color: ${({ theme }) => theme.colors.rose};
        color: ${({ theme }) => theme.colors.lightPink};
        height: 30px;
        border: none;
        font-size: 16px;
        width: 200px;
    }
`