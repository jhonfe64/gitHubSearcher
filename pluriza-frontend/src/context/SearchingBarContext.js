/*
    Este contexto obtiene los datos de busqueda del componente componets/SearchingBar
*/


import {useState, createContext} from 'react';

const SearchingBarContext = createContext();

const SearchingBarContextProvider = ({children}) =>{
    const [searchingData, setSearchingData] = useState({});

    const updateSearchingData = (userInfo) => {
        setSearchingData(userInfo)
    }

    return(
        <SearchingBarContext.Provider value={{searchingData, updateSearchingData}}>
            {children}
        </SearchingBarContext.Provider>
    )
}

export {SearchingBarContext, SearchingBarContextProvider}