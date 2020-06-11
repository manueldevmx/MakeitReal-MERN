import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto'


const Sidebar = () => {
    return ( 

        <aside>
            <h1>MAKEit<span>Real!</span></h1>  

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Dreams Targets</h2>
            </div>  
        </aside>
     );
}
 
export default Sidebar;


