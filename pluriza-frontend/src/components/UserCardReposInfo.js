/*
    Este componente renderiza la información de repositorios del usuario que se buscó en el input la prop userInfo viene de components/results
*/


import React, {useContext} from 'react';
import UserCardReposInfoElement from '../elements/UserCardReposInfoElement';
import {SearchingBarContext} from '../context/SearchingBarContext';
import CallToActionButton from '../elements/CallToActionButton'

function UserCardReposInfo({userRepos}) {

    const {searchingData} = useContext(SearchingBarContext);
    
    return (
         searchingData && searchingData.userName.length > 3 && searchingData.searchType === "repo"  && userRepos.full_name !== undefined &&
        <UserCardReposInfoElement key={userRepos.id}>
            <div className="cardContent">
            <h1>{userRepos.name}</h1>
            <p>{userRepos.description}</p>
            <h4>Visibility: {userRepos.visibility}</h4>
            <h4>Created at: {userRepos.created_at}</h4>
            <h4>Techonologies:</h4>
            {
               
               userRepos.topics.length > 0 ?
                userRepos.topics.map((technology)=>{
                    return(
                        <p>{technology}</p>
                    )
                }): <p>No technologies available</p>
               }
            </div>
            
               <CallToActionButton href={userRepos.html_url}>check the repo</CallToActionButton>
        </UserCardReposInfoElement>
    )
}

export default UserCardReposInfo
