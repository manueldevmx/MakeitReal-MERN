import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'



const Sidebar = () => {
    return ( 

        <aside>
            <h1>MAKEit<span>Real!</span></h1>  

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Dreams Targets</h2>

                <ListadoProyectos />
            </div>  

            



        </aside>
     );
}
 
export default Sidebar;


