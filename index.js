const express = require('express');
// const dotenv = require('dotenv');
// const dotenv2 = dotenv.config()
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/routes');


const path = require('path')

//creamos el servidor de exxpress
const app = express();

//escuchar peticiones

app.set('port', process.env.PORT);

//variables de entorno
app.listen(app.get('port'), ()=>{
    console.log(`server running on port ${app.get('port')}`);
});


//buscar la carpeta public  y usarla para todo el proyecto
//Cone sto lel vamos a decir que la carpetaa public va a ser enviada al neavegador
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());

//la funcion de las rutas recibe el parametro app
routes(app);






