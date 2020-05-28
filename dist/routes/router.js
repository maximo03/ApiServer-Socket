"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/mensajes', function (req, res) {
    res.json({
        estado: '200 OK',
        mensaje: 'ESTE ES EL METODO GET'
    });
});
/*********************************************************/
exports.router.post('/mensajes', function (req, res) {
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    res.json({
        estado: '200 OK',
        cuerpo: cuerpo,
        de: de
    });
});
/*********************************************************/
exports.router.post('/mensajes/:id', function (req, res) {
    var id = req.params.id;
    res.json({
        estado: '200 OK',
        mensaje: 'el numero es: ' + id
    });
});
/*********************************************************/
/*********************************************************/
exports.default = exports.router;
