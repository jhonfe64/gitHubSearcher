/*
    este controlador es la funcion que se ejecuta  al visitar la ruta '/api/search' ver /routes/api/search
    este controlador hace las peticiones a la api de github al visitar la ruta mencionada, el componente SearchingBar
    de /pluriza-frontend/src/components/SearchingBar realiza la petición al endpoint `http://localhost:4000/api/search`

    así mismo guarda en redix la información de la consulta por 7200 segundos

*/

const ctrl = {}
const {gitHubHeader} = require('../keys');

const fetch = require('node-fetch');
const redis = require('redis');



//configurando el clinete de redis
const client = redis.createClient({
    host:'127.0.0.1',
    port: 6379
});

ctrl.search = async (req, res) => {
    const {userName, searchType} = req.body;

    if(userName && searchType === "user"){
        const user = await fetch(`https://api.github.com/users/${userName}`,  gitHubHeader)
        const data = await user.json();
        res.json(data);

        //establesca la clave como el nombre del usuario
        client.setex(userName, 7200, JSON.stringify(data))

    }else if(userName && searchType === "repo"){
        const repos = await fetch(`https://api.github.com/users/${userName}/repos`, gitHubHeader)
        const data = await repos.json();
        res.json(data);

        //establecemos la clave como repos que se guarde en redis por un timepo, y guarde la data como 
        client.setex('repositories'+ userName, 7200, JSON.stringify(data));
    }
}


module.exports = ctrl;