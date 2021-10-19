import useFetch from '../../hooks/useFetch';
import {renderHook} from '@testing-library/react-hooks';


describe('pruebas en el hook useFetch', ()=>{


    const inputValue = "Jhonfe64";
    const searchTag = "user";

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


    test('el hook debe retornar el estado inicial', ()=>{

        const {result} = renderHook(()=>useFetch(url, body, headers, inputValue, searchTag));
        const {data, loading} = result.current;


        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('el hook debe retornar un objeto con la información del usuario', async()=> {
        const {result, waitForNextUpdate} = renderHook(()=>useFetch(url, body, headers, inputValue, searchTag));
        await waitForNextUpdate()
        const {data, loading} = result.current

        expect(loading).toBe(false);
        expect(typeof data).toBe('object')
    });
})