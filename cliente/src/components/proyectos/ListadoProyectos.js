import React from 'react';
import Proyecto from '../proyectos/Proyecto';


const ListadoProyectos = () => {

    const proyectos = [
        {nombre: ''},
        {nombre: ''},
        {nombre: ''}
    ]

    return ( 

        <ul className="listado-proyectos">
             {proyectos.map(proyecto => (
                 <Proyecto 
                    proyecto={proyecto}
                 />
             ))}
        </ul>
     );
}
 
export default ListadoProyectos;