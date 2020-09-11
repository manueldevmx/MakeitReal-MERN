const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');


//Crea una nueva tarea
exports.crearTarea = async(req, res) => {

    //revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    try {

        //Extraer el proyecto y comprobar si existe
        const { proyecto } = req.body;

        const existeproyecto = await Proyecto.findById(proyecto);
        if (!existeproyecto) {
            return res.status(400).json({ msg: 'Proyecto no encontrado' })
        }

        //Revisar si el proyecto actual pertenece al usuario autenticado

        if (existeproyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Access' });
        }

        //Crear tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({ tarea });



    } catch (error) {
        console.log(error);
        res.status(500).send('Error Error')
    }

}

//Obtiene las tareas por proyecto
exports.obtenerTareas = async(req, res) => {

    try {
        //Extraer el proyecto y comprobar si existe
        const { proyecto } = req.body;

        //extraer proyecto
        const existeproyecto = await Proyecto.findById(proyecto);
        if (!existeproyecto) {
            return res.status(400).json({ msg: 'Proyecto no encontrado' })
        }

        //Revisar si el proyecto actual pertenece al usuario autenticado

        if (existeproyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Access' });
        }

        //Obtener las tareas por proyecto
        const tareas = await Tarea.find({ proyecto });

        res.json({ tareas });



    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

//Actuazlizar tarea 
exports.actualizarTarea = async(res, req) => {
    try {
        //Extraer el proyecto y comprobar si existe
        const { proyecto, nombre, estado } = req.body;

        //Si la tarea existe o no
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            return res.status(404).json({ msg: 'No Task' });
        }

        //extraer el proyecto
        const existeProyecto = await Proyecto.findById(proyecto);

        //Revisar si el proyecto actual pertenece al usuar autenticado

        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Access' });
        }
        //Crear un objeto con la nueva informacion
        const nuevaTarea = {};

        if (nombre) {
            nuevaTarea.nombre = nombre;
        }
        if (estado) {
            nuevaTarea.estado = estado;
        }

        //Guardar la tarea
        tarea = await Tarea.findByIdAndUpdate({ _id: req.params.id }, nuevaTarea, { new: true });
        res.json({ tarea })

    } catch (error) {
        console.log(errror);
        res.status(500).send('Hubo un error')
    }
}

//eliminar una tarea
exports.eliminarTarea = async(req, res) => {
    try {

        //Extraer el proyecto y comprobar si existe
        const { proyecto, nombre, estado } = req.body;

        //Si la tarea existe o no
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            return res.status(404).json({ msg: 'No Task' });
        }

        //extraer el proyecto
        const existeProyecto = await Proyecto.findById(proyecto);

        //Revisar si el proyecto actual pertenece al usuar autenticado

        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Access' });
        }
        //Crear un objeto con la nueva informacion
        const nuevaTarea = {};

        if (nombre) {
            nuevaTarea.nombre = nombre;
        }
        if (estado) {
            nuevaTarea.estado = estado;
        }

        //Guardar la tarea
        tarea = await Tarea.findByIdAndUpdate({ _id: req.params.id }, nuevaTarea, { new: true });
        res.json({ tarea })

        //Eliminar
        await Tarea.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Task Out' })

    } catch (error) {
        console.log(errror);
        res.status(500).send('Hubo un error')
    }

}