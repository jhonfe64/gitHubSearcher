/*
    Este componente renderiza la información del usuario que se buscó en el input la prop userInfo viene de components/results
*/

import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {SearchingBarContext} from '../context/SearchingBarContext';

import UserCardElement from '../elements/UserCardElement';
import CallToActionButton from '../elements/CallToActionButton'

function UserCardInfo({userInfo}) {
    const {searchingData} = useContext(SearchingBarContext);
    return (
        userInfo.message !== 'Not Found' && userInfo.login !== undefined && searchingData && searchingData.userName.length > 3 && searchingData.searchType === "user" &&
        <UserCardElement key={searchingData.id}>
                  <div>
                        <div className="img-container">
                            <img src={userInfo.avatar_url} alt="" />
                        </div>
                        <div className="personalInfo">
                            <h1>{userInfo.name}</h1>
                            <p>{userInfo.bio}</p>
                        </div>
                            
                        <div className="description">
                            <h2>Location: {userInfo.location ? userInfo.location: "Unknown"}</h2>
                            <h2>Followers: {userInfo.followers}</h2>
                            <h2>Following: {userInfo.following}</h2>
                            <h2>Repositories: {userInfo.public_repos}</h2>
                            {
                                userInfo.twitter_username && <h2>Twitter: {userInfo.twitter_username}</h2>
                            }
                            <CallToActionButton href={userInfo.html_url} target="_blank">See profile</CallToActionButton>
                        </div>
                    </div>
        </UserCardElement>
    )
}

UserCardInfo.propTypes = {
    userInfo: PropTypes.object.isRequired
}


export default UserCardInfo

