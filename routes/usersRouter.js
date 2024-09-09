
const express = requiere ('express');
const router = express.Router();

router.get ('/', (require, request) => {
    console.log ('Get users')
} );

//obtener por id
router.get ('/:id', (require, request) => {
    console.log ('Get users by id')
} ); 

//crear usuario
router.post ('/', (require, request) => {
    console.log ('Post  users')
} );

//actualiza usuario por id
router.put ('/:id', (require, request) => {
    console.log ('Actualizar users by id')
} );

//elimina por id
router.delete ('/:id', (require, request) => {
    console.log ('Delete users by id')
} );

//lo pide 
module.exports = router; 