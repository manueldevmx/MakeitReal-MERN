import React, { Fragment } from 'react';

const NuevoProyecto = () => {
    return ( 
        <Fragment>
            <buttom
                type="button"
                className="btn btn-block btn-primario"
            >I wish</buttom>

            <form
                className="formulario-nuevo-proyecto"
            >
                <input
                type="text"
                className="input-text"
                placeholder="New target"
                name="nombre"
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