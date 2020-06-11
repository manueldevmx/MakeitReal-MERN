import React, { useState }from 'react';
import { Link } from "react-router-dom";

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState ({
        email: '',
        password: ''
    });

    //extraer de usuario
    const { email, password } = usuario;  

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


        //Pasarlo al action
    }



//Formulario para iniciar sesion//
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Welcome to MAKEit!<span>Real!</span></h1>


                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email.</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Write your name"
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
                        placeholder="Choose a password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                         value="Login"/>       
                    </div>
                </form>


                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}
 
export default Login;