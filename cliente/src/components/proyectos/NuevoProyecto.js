import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    //State para proyecto

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

//Extracion del nombre del proyecto 
    const {nombre} = proyecto;


//Contenidos del input

    const onchangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    } 

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
    }


    //Validar proyecto

    //agregar al state

    //Reiniciar el form

    return ( 
        <Fragment>
            <buttom
                type="button"
                className="btn btn-block btn-primario"
            >I wish</buttom>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input
                type="text"
                className="input-text"
                placeholder="New target"
                name="nombre"
                value={nombre}
                onChange={onchangeProyecto}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Feelling Cool"
                />
                
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;