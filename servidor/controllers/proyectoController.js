const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');



exports.crearProyecto = async(req, res) => {


    //revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    try {
        //Crear un nuevo proyecto 
        const proyecto = new Proyecto(req.body);

        //Guardar el creador JWT
        proyecto.creador = req.usuario.id;

        //Guardar proyecto
        proyecto.save();
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');

    }


}



//obtiene los proyectos del usuario actual
exports.obtenerProyectos = async(req, res) => {
    try {
        const proyectos = await Proyecto.find({ creador: req.usuario.id });
        res.json({ proyectos });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error!')
    }
}


//actualiza un proyecto
exports.actualizaProyecto = async(req, res) => {

    //revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }


    //Extraer informacion del proyecto
    const { nombre } = req.body;
    const nuevoProyecto = {};

    if (nombre) {
        nuevoProyecto.nombre = nombre;
    }

    try {
        //revisar ID


        //si el proyecto existe o no


        //verificar el creador del proyecto


        //actualizar


    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error Hacking')
    }
}