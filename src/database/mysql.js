var mysql = require('mysql');

var conn = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'dependecia',
    user: process.env.DB_USER || 'prueba',
    password: process.env.DB_PWD || 'prueba'
});

conn.connect((err) => {
    if(err){
        console.log(cxn);
        console.log(process.env.DB_USER);
        console.log('Error de conexión a la base de datos');
        return;
    }

    console.log('Conectado a la base de datos');
});

module.exports = conn;