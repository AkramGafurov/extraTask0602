import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 10px;

    & > a {
        color: #282c34;
        text-decoration: none;
    }

    & > a.active {
        color: #7fb8f1;
        text-decoration: underline;
    }

    & > a:hover {
        color: steelblue;
    }
`

export const S = {NavWrapper}