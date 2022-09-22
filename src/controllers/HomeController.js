const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const db = require('../database/mysql');
const { response } = require('express');
const controller = {};

controller.IniciarSesion = (req, res) => {
    const { CorreoElectronico, Password} = req.body;

    if(!CorreoElectronico || !Password){
        res.json({
            error: true,
            mensaje: 'Los campos Correo Electrónico y Contraseña son requeridos'
        });
        return;
    }

    try {
        const query = `SELECT * FROM usuarios WHERE correoelectronico = '${CorreoElectronico}'`;
        db.query(query, async (error, results) => {
          if (results.length == 0 || ! (await bcryptjs.compare(Password, results[0].Password))) {
            res.json({
              error: true,
              mensaje: "El correo electrónico y/o contraseña es incorrecto.",
            });
          } else {
            const id = results[0].UsuarioID;
            const token = jwt.sign(
                {id},
                process.env.JWT_SECRETO,
                {expiresIn: process.env.JWT_EXPIRA});
            const cookiesOptions = {
                expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRA * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie('pladse', token, cookiesOptions);
            res.json({ error: false});
          }
        });
    
    } catch (ex) {
        res.json({
            error: true,
            mensaje: ex
        });
    }
};

controller.Registro = async (req, res) => {
    const {Nombre, PrimerApellido, SegundoApellido, CorreoElectronico, Password, FechaInicio, FechaTermino, Activo } = req.body;
    let pwd = await bcryptjs.hash(Password, 8);
    let activo = 0;
    if(Activo !== undefined){
        activo = 1;
    }
    try {
        let query = `INSERT INTO usuarios VALUES(uuid(),'${Nombre}','${PrimerApellido}','${SegundoApellido}','${CorreoElectronico}','${pwd}','${FechaInicio}','${FechaTermino}',${activo})`;
        db.query(query, (error, resultado) => {
            if(error){console.log(error);}
            res.redirect('/');
        });
    } catch (error) {
        console.log(error);
        res.render('home/registro', { data: req.body });
    }
};

module.exports = controller;