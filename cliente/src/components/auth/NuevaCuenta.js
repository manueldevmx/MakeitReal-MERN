import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext'; 

const NuevaCuenta = (props) => {

    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;


    const authContext = useContext(AuthContext);
    const { mensaje, autenticado,  registrarUsuario } = authContext;

    // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
       
    }, [mensaje, autenticado, props.history]);

    //useState para iniciar sesion
    const [usuario, guardarUsuario] = useState ({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //extraer de usuario
    const { nombre, email, password, confirmar } = usuario;  

    const onChange = e => {
        guardarUsuario ({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }
    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if( nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirmar.trim() === '') {
                mostrarAlerta ('Todos los campos son obligatorios', 'alerta-error');
                return;
            }


        //Password minimo 6 caracteres
            if(password.length < 6) {
                mostrarAlerta('El password debe tener al menos 6 caracteres', 'alerta-error');
                return;
            }

        //Los 2 passwords diferentes
        if(password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

          // Pasarlo al action
        registrarUsuario({
            nombre, 
            email, 
            password
        });
    }



//Formulario para iniciar sesion//
    return (
        <div className="form-usuario">
            { alerta ? ( <div className={ `alerta ${alerta.categoria}` }> {alerta.msg} </div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Lets Get Started!</h1>


                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Username</label>
                        <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Write your name, please"
                        value={nombre}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Put your email"
                        value={email}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Write a password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirm Password</label>
                        <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Please, repeat your password"
                        value={confirmar}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                         value="Sign Up"/>       
                    </div>
                </form>


                <Link to={'/'} className="enlace-cuenta">
                    Take me Back
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;