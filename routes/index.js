//importo las rutas 
const productRouter = requiere('./productsRouter');
const userRouter = requiere('./usersRouter');

//defino la funcion en la aplicacion de entrada 
function routeAPI(app){
    //defino los endPoints
    app.use('/users' , userRouter); 
    app.use('/products' , productRouter);
};

//Exportamos la funcion 
module.exports = routeAPI;