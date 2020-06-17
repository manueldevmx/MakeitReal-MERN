import React, {useReducer} from 'react'; 
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA} from '../../types';

 const TareaState = props => {
     const initialState = {
         tareas: [
            {id:1,nombre: 'Test 1', estado: true, proyectoId: 1},
            {id:2,nombre: 'Test 2', estado: false, proyectoId: 2},
            {id:3,nombre: 'Test 3', estado: false, proyectoId: 3},
            {id:4,nombre: 'Test 4', estado: true, proyectoId: 4},
            {id:5,nombre: 'Test 1', estado: true, proyectoId: 1},
            {id:6,nombre: 'Test 2', estado: false, proyectoId: 2},
            {id:7,nombre: 'Test 3', estado: false, proyectoId: 3},
         ],
         tareasproyecto: null,
         errortarea: false
     }

     //Crear dispacth y state
     const [state, dispatch] = useReducer(TareaReducer, initialState);

     //Crear las funciones

     //Funcion para agregar el proyecto actual
     const seleccionarProyecto = id => {

     }

     //Obtener las tareas de un proyecto 
     const  obtenerTareas = proyectoId => {
         dispatch({
             type: TAREAS_PROYECTO,
             payload: proyectoId
         })
     }
     //Agregar una tarea al proyecto seleccionado
     const agregarTarea = tarea => {
         dispatch({
             type: AGREGAR_TAREA,
             payload: tarea
         })
     }

    //Valida y muestra error en caso de que sea necesario
     const validarTarea = () => {
         dispatch({
             type: VALIDAR_TAREA
         })
     }

     //Eliminar tarea por su Id
     const eliminarTarea = id => {
         dispatch({
             type: ELIMINAR_TAREA,
             payload: id
         })
     }



     return (
          <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
          >
              {props.children}
          </TareaContext.Provider>
     )

 }

 export default TareaState; 