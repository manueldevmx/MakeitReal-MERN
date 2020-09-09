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
        let proyecto = await Proyecto.findById(req.params.id);

        //si el proyecto existe o no
        if (!proyecto) {
            return res.status(400).json({ msg: 'Proyect not found' })
        }


        //verificar el creador del proyecto
        if (proyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Access' });
        }

        //actualizar
        proyecto = await Proyecto.findByIdAndUpdate({ _id: req.params.id }, {
            $set: nuevoProyecto
        }, { new: true });

        res.json({ proyecto });


    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error Hacking')
    }
}

//Eliminar un proyecto por su Id
exports.eliminarProyecto = async(req, res) => {
    try {
        //revisar ID
        let proyecto = await Proyecto.findById(req.params.id);

        //si el proyecto existe o no
        if (!proyecto) {
            return res.status(400).json({ msg: 'Proyect not found' })
        }


        //verificar el creador del proyecto
        if (proyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Access' });
        }

        //Eliminar proyecto
        await Proyecto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Project removed' })

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error')

    }

}