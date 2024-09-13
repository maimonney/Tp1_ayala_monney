const express = requiere ('express');
const router = express.Router();

router.get ('/', (require, request) => {
    console.log ('Get products')
} );

//obtener por id
router.get ('/:id', (require, request) => {
    console.log ('Get products by id')
} ); 

//crear usuario
router.post ('/', (require, request) => {
    console.log ('Post  products')
} );

//actualiza usuario por id
router.put ('/:id', (require, request) => {
    console.log ('Actualizar products by id')
} );

//elimina por id
router.delete ('/:id', (require, request) => {
    console.log ('Delete products by id')
} );

//lo pide 
module.exports = router; 