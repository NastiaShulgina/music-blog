import styled from "styled-components";

export const StyledNavLinks = styled.div`
    @media screen and (max-width: 1000px){
        flex-direction: column;
        position: sticky;
        height: 100%;
        width: inherit;

        /* width: 100vh; */
        /* top: 0;
        bottom: 0; */

        a, button {
            height: 60px;
            margin: 10px auto;
            width: inherit;
            /* min-width: 199%; */
            /* width: 230%; */
        }
    }
`