import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';



const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;


    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

    //State del formulario
    const [tarea, guardarTarea] = useState ({
        nombre: ''
    })

    //Extraer el nombre del proyecto
    const { nombre } = tarea;

        //Si no hay proyecto seleccionado 
        if (!proyecto)  return null; 

        //Array destructuing para extraer el proyecto actual
        const [proyectoActual] = proyecto;

        //Leer los valores del formulario
        const handleChange = e =>{
            guardarTarea({
                ...tarea,
                [e.target.name] : e.target.value
            })
        }

        const onSubmit = e => {
            e.preventDefault ();

             //Validar
            if  (nombre.trim() === '') {
                validarTarea();
                return;
            }
             //pasar la validacion

             //agregar la nueva tarea al state de tareas
             tarea.proyectoId = proyectoActual.id;
             tarea.estado = false;
             agregarTarea(tarea);

             //Obtener y filtrar tareas del proyecto
             obtenerTareas(proyectoActual.id);

             //Reiniciar el formulario 
             guardarTarea ({
                 nombre: '' 
             })
        }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder=""
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Agregar Tarea"
                    />
                </div>

            </form>
            {errortarea ? <p className="mensaje error">You need a task! </p> : null}
        </div>
     );
}
 
export default FormTarea;