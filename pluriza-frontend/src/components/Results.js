/*
    Este componente Results toma la informacion del usuario, del estado global /context/UserInfoContext y la envia por props a los componentes UserCardReposInfo o UserCardInfo dependiendod el tipo de busqueda realizada por repo o user
    esta informacion tambein se obtiene del estado global /context/SearchingBarContext
*/

import {useContext} from 'react';

import {UserInfoContext} from '../context/UserInfoContext';
import {SearchingBarContext} from '../context/SearchingBarContext';

import UserCardInfo from "./UserCardInfo";
import  UserCardReposInfo from './UserCardReposInfo';


import ResultsElement from '../elements/ResultsElement';


function Results() {

    const {userInformation} = useContext(UserInfoContext);
    const {searchingData} = useContext(SearchingBarContext);



    return (
        <ResultsElement className="container">

            {
                userInformation.map((user)=>{
                    return  searchingData.searchType === 'repo' && < UserCardReposInfo userRepos={user}/>
                })
            }
            {
                userInformation.map((user)=>{
                    return searchingData.searchType === 'user' && <UserCardInfo key={user} userInfo={user} />
                })
            }
            
        </ResultsElement>
    )
}

export default Results
