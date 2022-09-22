const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const HomeController = require('../controllers/HomeController');

//vistas
router.get("/", (req, res) => {
    if(!req.cookies.pladse){
        res.render('home/inicioSesion', {
            resultado: {
                error: false
            }
        });
    };

    const decoded = jwt.verify(req.cookies.pladse, process.env.JWT_SECRETO);
    console.log(decoded);

    res.render('home/index', {
        resultado: {
            error: false
        }
    });
});
router.get("/inicioSesion", (req, res) => {
    console.log('inicio de sesion');
    res.render('home/inicioSesion', {
        resultado: {
            error: false
        }
    });
});

router.get("/recuperarPwd", (req, res) => {
    res.render('home/recuperarpwd');
});
router.get("/registro", (req, res) => {
    res.render('home/registro', {
        data: { Nombre: '', 
                PrimerApellido: '', 
                SegundoApellido: '', 
                CorreoElectronico: '', 
                Password: '', 
                FechaInicio: '', 
                FechaTermino: '', 
                Activo: true }
    });
});

//controlador
router.post("/iniciarSesion", HomeController.IniciarSesion);
router.post("/registro", HomeController.Registro);

module.exports = router;