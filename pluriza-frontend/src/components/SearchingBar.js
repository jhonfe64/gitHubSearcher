/*

    Este componente ontiene el valor del input (el usuario de github que se va a buscar) y el tipo de busqueda del select user o repo, asi mismo actualiza el estado global context/SearchingBarContext

    Además realiza la consulta a la ruta del backedn /routes/routes.js /api/search,  toma los datos de la consulta y los envia al estado global context/UserInfoContext
*/


import React, {useState, useEffect, useContext} from 'react';

import SearchingBarElement from '../elements/SearchingBarElement';
import ClearCahe from './ClearCahe'
import useFetch from '../hooks/useFetch';
import {UserInfoContext} from '../context/UserInfoContext';
import {SearchingBarContext} from '../context/SearchingBarContext';


function SearchingBar() {

    const [inputValue, setInputValue] = useState('');
    const [searchTag, setSearchTag] = useState('user');

    //Contexto que envia la informacion del usuario despues de la consulta a la api
    const {updateUserInformation} = useContext(UserInfoContext);
    //contexto que envia el valor del input y dels elect para la busqueda enun objeto
    const {updateSearchingData} = useContext(SearchingBarContext);


    useEffect(()=>{
        updateSearchingData({
            userName: inputValue,
            searchType: searchTag
        });
    },[inputValue, searchTag])


    const url = `http://localhost:4000/api/search`;
    const body = JSON.stringify( {
        userName: inputValue,
        searchType: searchTag
    });

    const headers = {
        mode: 'cors',
        Accept : 'application/json',
        'Content-Type': 'application/json',
    }

    //custome hook que hace la peticion y obtiene la informacion del usuario ya sean solo los repos o la info de usuario
    const {data:userInfo, loading} = useFetch(url, body, headers, inputValue, searchTag);

    useEffect(()=>{
        if(userInfo){
            updateUserInformation(userInfo)
        }
    },[userInfo, loading])

      const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleTag = (e) => {
        setSearchTag(e.target.value);
    }

    return (
        <SearchingBarElement className="container">
            <form>
                <input onChange={handleInputValue} value={inputValue} type="text" placeholder="Start typing to search ..."/>
                <select onChange={handleTag}>
                    <option value="user" key="user">usuario</option>
                    <option value="repo" key="repo">Repositorio</option>
                </select>
            </form>
            <div>
                <ClearCahe/>
            </div>           
        </SearchingBarElement>
    )
}

export default SearchingBar
