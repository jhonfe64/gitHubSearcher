import styled from "styled-components";

const CallToActionButton = styled.a`
    display: block;
    width: 100%;
    text-decoration: none;
    background-color: #03bfcb;
    border-radius: 5px;
    padding: 7px;
    text-align: center;
    font-weight: 100;
    color: #231e39;
    margin-top: 20px;
    border: 2px solid transparent;
    &:hover {
        background: none;
        border: 2px solid #03bfcb;
        color: white;
    }

`

export default CallToActionButton;