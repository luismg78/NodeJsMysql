const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');

router.get("/", HomeController.Index);
router.post("/iniciarSesion", HomeController.IniciarSesion);
router.get("/registro", HomeController.Registro);
router.get("/recuperarPwd", HomeController.RecuperarPassword);

module.exports = router;