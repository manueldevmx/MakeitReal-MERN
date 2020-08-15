const express = require('express');
const conectarDB = require('./config/db')

//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar express.json
app.use(express.json({ extended: true }));

//PUERTO DE LA APP
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));




//run app
app.listen(PORT, () => {
    console.log(`SERVER ON PORT: ${PORT}`);
});