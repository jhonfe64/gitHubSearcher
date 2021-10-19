/*
    Este hook se encarga de hacer fetch a las rutas get obtener y retornar la data

*/

import {useEffect, useState} from 'react';


const UseGetFech = async (url, btnState) => {
    const [state, setState] = useState({
        data: []
    })

    useEffect(()=>{
        if(btnState == true){
            const fetching = async () => {
                const urlFetch = await fetch(url)
                const da = await urlFetch.json();
                setState(da);
            }
            fetching(url)
        }

    },[url, btnState])
    return(state);
}



export default UseGetFech;
