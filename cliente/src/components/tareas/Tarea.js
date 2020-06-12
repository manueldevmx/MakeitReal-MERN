import React from 'react'

const Tarea = ({tarea}) => {
    return ( 
          <li className="tarea sombra">
              <p>{tarea.nombre}</p>

            <div className="estado">
                  {tarea.estado
                  ?
                   (
                        <button
                            type="button"
                            className="completo"
                        >
                           Completed  
                       </button>
                   )
                  :

                  (
                    <button
                         type="button"
                         className="incompleto"
                     >
                        Incompleted  
                    </button>
                )
                    }
            </div>

            <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primario"
                    >
                        Edit
                    </button>

                    <button
                          type="button"
                          className="btn btn-secundario"
                    >
                        Delete
                    </button>
            </div>

          </li>
     );
}
 
export default Tarea;