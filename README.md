
# gitHubSearcher

Esta aplicación incluye los siguientes paquetes

## Backend

-cors
-dotenv
-express
-node-fetch
-nodemon
-redis
-redis-commander


## Frontend

-react
-styledcomponents

Clone el repositorio git clone https://github.com/jhonfe64/gitHubSearcher.git
Use npm i para instalar todas las dependencias

el frontend se encuentra en la carpeta pluriza-frontend


===> Para correr el backend

-Abra la carpeta plurizaApp en el editoor de código
-en la consola escriba el comando npm run dev
-este corre en el puerto 4000

===> Para correr el fronted

-Ingrese a la carpeta cd pluriza-frontend
-escriba el comando npm start

==> Para guardar caché

==>  Debe tener redis instalado en su computadora

-Abra una terminal y ejecute redis =>  redis-server
-En la consola estando en la carpeta plurizaApp escriba el comando redis-commander
-coloque en el nvegador http://localhost:8081
-Puede ver en la interfas los datos que se van guardando en redis


