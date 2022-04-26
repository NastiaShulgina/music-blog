import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 30px 100px;

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
        align-self: center;
        margin: 10px auto;
    }

    .form-search {
        display: none;
    }

    .lang-buttons {
        display: flex;
        justify-content: center;
    }

    #ANY {
        margin-top: 5px;
    }

    #any-label {
        align-self: center;
        margin-top: 3px;
    }

    @media screen and (max-width: 1000px){
        /* justify-content: center; */
        
    }

    @media screen and (max-width: 800px){
        justify-content: center;
        font-size: 0.6em;
        .form-search {
            display: flex;
        }
        .form-search > input {
            background-color: ${({ theme }) => theme.colors.lilac};
            padding-left: 5px;
            border: none;
            font-size: 16px;
            /* width: 100%; */
            justify-self: center;
            /* margin-right: 20px; */
        }

        .form-search > input::placeholder, .form-search > input {
            color: ${({ theme }) => theme.colors.lightPink};
            height: 40px;
            font-size: 17px;
            justify-self: center;
        }

        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`