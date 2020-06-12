import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {


    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;




    //State para proyecto

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Extracion del nombre del proyecto 
    const { nombre } = proyecto;


    //Contenidos del input

    const onchangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();


        //Validar proyecto
        if (nombre === '') {
            return;
        }

        //agregar al state
        agregarProyecto(proyecto)

        //Reiniciar el form
        guardarProyecto({
            nombre: ''
        })

    }



    //Mostrar el formulario 

    const onClickFormulario = () => {
        mostrarFormulario();
    }


    return ( <
        Fragment >
        <
        buttom type = "button"
        className = "btn btn-block btn-primario"
        onClick = { onClickFormulario } >
        I wish < /buttom>

        {
            formulario
                ?
                ( <
                    form className = "formulario-nuevo-proyecto"
                    onSubmit = { onSubmitProyecto } >
                    <
                    input type = "text"
                    className = "input-text"
                    placeholder = "New target"
                    name = "nombre"
                    value = { nombre }
                    onChange = { onchangeProyecto }
                    />

                    <
                    input type = "submit"
                    className = "btn btn-primario btn-block"
                    value = "Feelling Cool" /
                    >

                    <
                    /form>
                ) : null
        } <
        /Fragment>
    );
}

export default NuevoProyecto;