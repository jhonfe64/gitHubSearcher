const express = require('express');
const router = express.Router();


//middlewares
const cacheUserInformation = require('../middlewares/redismiddlewares')


//Controlador para realizar la busqueda
const {search} = require('../controllers/search');
const {clearCache} = require('../controllers/clearCache');


const routes = (app) => {

    //ruta de busqueda
    router.post('/api/search', [cacheUserInformation], search);

    //ruta de limpiar caché
    router.get('/api/clearcache', clearCache);

    app.use(router);
}

module.exports = routes;



