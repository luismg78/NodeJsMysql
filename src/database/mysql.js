var mysql = require('mysql');

// var conn = mysql.createConnection({
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PWD
// });

var conn = mysql.createConnection({
    host: 'localhost',
    database: 'dependecia',
    user: 'prueba',
    password: 'prueba'
});

conn.connect((err) => {
    if(err){
        console.log(err);
        console.log('Error de conexión a la base de datos');
        return;
    }

    console.log('Conectado a la base de datos');
});

module.exports = conn;