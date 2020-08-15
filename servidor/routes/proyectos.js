const express = require('express')
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');



//crea proyecto
//api/proyectos

router.post('/',
    auth, [
        check('nombre', 'You need a name for the project').not().isEmpty()
    ],
    proyectoController.crearProyecto
)

//Obtener todos los proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos
)

//Actualiza proyecto ID
router.put('/:id',
    auth, [
        check('nombre', 'You need a name for the project').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
)

module.exports = router;