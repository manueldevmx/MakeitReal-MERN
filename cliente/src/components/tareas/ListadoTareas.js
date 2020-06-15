import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

        //Extraer proyectos de State inicial
        const proyectosContext = useContext(proyectoContext);
        const { proyecto, eliminarProyecto } = proyectosContext;

        //Si no hay proyecto seleccionado 
        if (!proyecto)  return <h2>Choose a dream</h2>

        //Array destructuing para extraer el proyecto actual
        const [proyectoActual] = proyecto;
 
    const tareasProyecto = [
        {nombre: 'Test 1', estado: true},
        {nombre: 'Test 2', estado: false},
        {nombre: 'Test 3', estado: false},
        {nombre: 'Test 4', estado: true}
    ];

    //Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
        <h2>Idea:{proyectoActual.nombre}</h2>

        <ul className="listado-tareas">
            {tareasProyecto.length === 0
                ? (<li className="tarea"><p>You need dream more!</p></li>)

                : tareasProyecto.map(tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                ))
            }

            <button
            type="button"
            className="btn btn-eliminar0"
            onClick={onClickEliminar}
        >Delete Idea &times;</button>
        </ul>


        </Fragment>
     );
}
 
export default ListadoTareas;