/*
    Este componente un btn hace la consulta a la ruta de la api del backend ver  /plurizaapp/api/clearcache mediante el hook peronalizado /hooks/useGetFetch dicha ruta limpia el cache de la apilcación redis.

*/

import React, {useState} from 'react';
import ClearCaheElement from '../elements/ClearCacheElement';
import UseGetFech from '../hooks/UseGetFech';


function ClearCahe() {

    const [btnState, setBtnState] = useState(false)
    
    const clearData = UseGetFech('http://localhost:4000/api/clearcache', btnState);


    const clearCacheData = ()=> {
        setBtnState(true)
        clearData.then((res)=>{
            setBtnState(false)
            if(res === 'OK'){
            alert("all cached data have been cleared")
        }
    })
}

    return (
        <ClearCaheElement onClick={clearCacheData}>Clear caché</ClearCaheElement>
    )
}

export default ClearCahe;
