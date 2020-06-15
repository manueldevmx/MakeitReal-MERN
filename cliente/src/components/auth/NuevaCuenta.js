import React, { useState }from 'react';
import { Link } from "react-router-dom";

const NuevaCuenta = () => {

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
    //Cuando el usuario quiere iniciar sesion//
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios

        //Password minimo 6 caracteres

        //Los 2 passwords diferentes

        //Pasarlo al action
    }



//Formulario para iniciar sesion//
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Lets Get Started</h1>


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
                        id="password"
                        name="password"
                        placeholder="Please, reapet your password"
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