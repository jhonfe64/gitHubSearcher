
import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';


describe('Pruebas sobre el compoenente <Header />', ()=>{
    test('probar que el componente se rederize correctamente', ()=>{
     
        const wrapper = shallow(< Header />);
        expect(wrapper).toMatchSnapshot();
    })
})