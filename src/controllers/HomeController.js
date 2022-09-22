const db = require('../database/mysql');
const controller = {};

controller.Index = (req, res) => {
    db();
    res.render('home/index', {
        resultado: {
            error: false
        }
    });
};

controller.IniciarSesion = (req, res) => {
    if(req.body.CorreoElectronico === '' || req.body.Password === ''){
        res.json({
            error: true,
            mensaje: 'Los campos Correo Electrónico y Contraseña son requeridos'
        });
    }
    
    res.json({ error: false });
};

controller.RecuperarPassword = (req, res) => {
    res.render('home/recuperarpwd');
};

controller.Registro = (req, res) => {
    res.render('home/registro');
};

module.exports = controller;