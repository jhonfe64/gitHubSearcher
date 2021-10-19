/*
    Este contexto obtiene los datos del usuario ya sean los repos o los datos del perfil
*/



import {useState, createContext} from 'react';


const UserInfoContext = createContext();

function UserInfoContextProvider({children}){
    const [userInformation, setUserInformation] = useState([]);


    const updateUserInformation = (userInformation) => {
        if(Array.isArray(userInformation)){
            setUserInformation(userInformation);
        }else{
            setUserInformation([userInformation])
        }
        
    }
   

    return(
        <UserInfoContext.Provider value={{userInformation, updateUserInformation}}>
            {children}
        </UserInfoContext.Provider>    
    )
}


export { UserInfoContext, UserInfoContextProvider}