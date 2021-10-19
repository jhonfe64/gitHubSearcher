/*

    este controlador es la funcion que se ejecuta  al visitar la ruta '/api/clearcache' ver /routes/routes.js

*/



const ctrl = {}
const redis = require('redis');


//configurando el clinete de redis
const client = redis.createClient({
    host:'127.0.0.1',
    port: 6379
});

ctrl.clearCache =  (req, res) => {
    client.flushall((err, answear)=>{
        if(err){
            throw new Error
        }
        res.status(200).json(answear);
    })
}


module.exports = ctrl;