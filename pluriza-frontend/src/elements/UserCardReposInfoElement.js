import styled from 'styled-components';

const UserCardReposInfoElement = styled.div`
    background-color: #231e39;
    color: #b3b7bf;
    width: 31%;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 3px  3px 5px rgba(0,0,0,.3);
    display: flex;
    flex-direction: column;
   
    & > .cardContent {
        flex: 1 1 auto;
        h1 {
            font-weight: 200;
            margin-bottom: 30px;
            text-align: center;
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.6rem;
        }
        p:first-of-type {
            margin-bottom: 30px;
            text-align: center;
        }

        h4 {
            margin-bottom: 10px;
        }

        p:not(p:first-of-type){
            display: inline-block;
            border: 1px solid #03bfcb;
            padding: 5px 10px;
            margin-right: 7px;
            margin-bottom: 7px;
            font-size: 0.9rem;
        }
    }

`


export default UserCardReposInfoElement;
