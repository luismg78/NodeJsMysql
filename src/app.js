const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

//importando rutas
const homeRoutes = require('./routes/home');

//configuración
app.set('port', process.env.PORT || 7812);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//variables de entorno
dotenv.config({path: `${path.join(__dirname, 'env', '.env')}`});

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());

//cookies
app.use(cookieParser());

//rutas
app.use('/', homeRoutes);

//archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
