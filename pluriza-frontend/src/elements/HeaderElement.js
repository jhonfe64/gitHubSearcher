import styled from "styled-components";

const HeaderElement = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    & img {
        width: 70px;
        margin-right: 40px;
    }
    & h1 {
        font-weight: 700;
    }
    & h3 {
        font-weight: 500;
        color: grey;
    }

`

export default HeaderElement
