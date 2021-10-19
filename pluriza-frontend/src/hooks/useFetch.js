/*
    Este hook se encarga de hacer fetch a las rutas post obtener y retornar la data

*/


import {useEffect, useState} from 'react';

const useFetch = (url, body, headers, inputValue, searchTag) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        if(inputValue.length >= 3 && searchTag){
            const fetching = async () => {
                const httpUrl = await fetch(url, {
                    method: 'POST',
                    headers,
                    body
                })
                const data = await httpUrl.json();
    
                setState({
                    data: data,
                    loading: false
                });
            }
    
            fetching(url);
        }
    },[inputValue, searchTag]);
    return(state);
}

export default useFetch
