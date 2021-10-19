import styled from "styled-components";

const userCardElement = styled.div`
    background-color: #231e39;
    border-radius: 10px;
    overflow: hidden;
    width: 30%;
    box-shadow: 3px  3px 5px rgba(0,0,0,.3);
    & div {
        width: 100%;
        & .img-container {
            width: 60%;
            height: 60%;
            padding: 30px;
            margin: auto;
                & img {
                padding: 7px;
                width: 100%;
                border: 2px double  #03bfcb;
                border-radius: 100%;
                margin: auto;
                display: block;
            }
        }
        & .description {
            text-align: left;
            padding: 30px;
            width: 100%;
            background-color: #1f1a36;
            color: #ecf0f1;
            & h2 {
                font-weight: 100;
                margin-bottom: 10px;
                color: #ecf0f1;
                font-size: 1rem;
                letter-spacing: 1px;
            }
        }
        & .personalInfo {
            padding: 30px;
            text-align: center;
            color: #b3b7bf;
            & h1 {
                text-align: center;
                font-weight: 200;
                margin-bottom: 20px;
                font-size: 1.6rem;
            }
            & p {
                text-align: center;
            }
        }
    }
`

export default userCardElement;
