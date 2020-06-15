import React, {useContext, useEffect} from 'react';
import Proyecto from '../proyectos/Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

    //Extraer proyectos de State inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //Obtener proyectos cuando carga el componente  
    useEffect(() => {
        obtenerProyectos ();
    },[]);



    //revisar si proyectos tiene contenido
    if (proyectos.lenght === 0 ) return <p>believe yourself</p>; 


    return ( 

        <ul className="listado-proyectos">
             {proyectos.map(proyecto => (
                 <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                 />
             ))}
        </ul>
     );
}
 
export default ListadoProyectos;