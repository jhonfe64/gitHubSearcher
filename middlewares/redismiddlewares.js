/*
    Este middleware verifica la existencia de información en caché, si existe hace la consulta con esta informacion, si no existe la infoemacion en redis, pasa a consultar la api de github

    ver     /routes/routes   ruts  /api/search

*/


const redis = require('redis');

//configurando el clinete de redis
const client = redis.createClient({
    host:'127.0.0.1',
    port: 6379
});

   
function cacheUserInformation(req, res, next){

    const {userName, searchType} = req.body;

    if(searchType === 'user'){
        client.get(userName, (err, data)=>{
            if(err){
                throw new Error
            }
            if(data){
                res.json(JSON.parse(data));
            }else{
                next();
            }
        })
    }

    if(searchType === 'repo'){
        client.get('repositories'+ userName, (err, data)=>{
            if(err){
                throw new Error
            }
            if(data){
                res.json(JSON.parse(data));
            }else{
                next();
            }
        })
    }
}


module.exports = cacheUserInformation;
