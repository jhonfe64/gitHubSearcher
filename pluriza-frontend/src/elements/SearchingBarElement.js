import styled from "styled-components";

const SearchingBarElement = styled.div`
  
    margin-bottom: 50px;

    & form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        & input {
        padding: 15px;
        width: 80%;
        border: 1px solid #ecf0f1;
        outline: none;
        }
        & select{
            padding: 10px;
            border: 1px solid #ecf0f1;
            width: 15%;
            outline: none;
        }

        @media screen and (max-width: 830px) {
            & input {
                margin-bottom: 20px;
            }
            & select, input {
                width: 100%;
                padding: 15px;
            }
        }
    }
    div {
        display: flex;
        justify-content: end;
        margin-top: 10px;
    }
`

export default SearchingBarElement
