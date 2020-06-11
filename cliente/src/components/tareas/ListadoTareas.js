import React, {Fragment} from 'react'
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre: 'Test 1', estado: true},
        {nombre: 'Test 2', estado: false},
        {nombre: 'Test 3', estado: false},
        {nombre: 'Test 4', estado: true}
    ]

    return ( 
        <Fragment>
        <h2>Idea: . . .</h2>

        <ul className="listado-tareas">
            {tareasProyecto.length === 0
                ? (<li className="tarea"><p>You need dream more!</p></li>)

                : tareasProyecto.map(tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                ))
            }
        </ul>
        </Fragment>
     );
}
 
export default ListadoTareas;