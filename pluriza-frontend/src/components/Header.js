/*
    Este componente Header es un componente sin estadoq ue solo muestar el logo y alfo de info para el ancabezado
*/


import React from 'react';
import  HeaderElement from '../elements/HeaderElement';

function Hearder() {
    return (
        <HeaderElement className="container">
            <img src="../images/logo.png" alt="logo" />
            <div className="textContainer">
                <h1>GitHub Searcher</h1>
                <h3>Search users or repositories below</h3>
            </div>
        </HeaderElement>
           
    )
}

export default Hearder
