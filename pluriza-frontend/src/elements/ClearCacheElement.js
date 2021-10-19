import styled from "styled-components";

const ClearCaheElement  = styled.button`
    background: black;
    color: white;
    padding: 7px;
    letter-spacing: 2px;
    font-size: .8rem;
    border: none;
    border: 2px solid transparent;

    &:hover {
        background-color: white;
        border: 2px solid black;
        transition: .2s;
        color: black;
    }
`

export default ClearCaheElement;
