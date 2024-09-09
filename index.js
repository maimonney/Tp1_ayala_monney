const port = 3000;
const express = requeire('express');
//iportamos las rutas 
const routerAPI = requiere('./routes');
const app = express();
//Middleware de Json 
app.use(express.json());

//Ruta Raiz --> Voy a colocar algo de html luego 
app.get('/', (request, response) => {
    response.status(200).send('<h1>Api rest  </h1>');
});

//Llamamos a la rutas 
routerAPI(app);
app.listen(port, ()=> {
    console.log(`Servidor escuchando al puerto ${port}`)
})