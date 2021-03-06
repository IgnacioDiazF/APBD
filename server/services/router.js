const express = require('express');
const router = new express.Router();
const patentes = require('../controllers/patentes.js');
const tipoinventos = require('../controllers/tipoinventos.js');
const inventos = require('../controllers/inventos.js');
const rubroempresas = require('../controllers/rubroempresas.js');

router.route('/patentes/:id?')
    .get(patentes.get)
    .post(patentes.post)
    .put(patentes.put)
    .delete(patentes.delete);

router.route('/tipoinventos/:id?')
    .get(tipoinventos.get)
    .post(tipoinventos.post)
    .put(tipoinventos.put)
    .delete(tipoinventos.delete);
    
router.route('/inventos/:id?')
    .get(inventos.get)
    .post(inventos.post)
    .put(inventos.put)
    .delete(inventos.delete);

router.route('/rubroempresas/:id?')
    .get(rubroempresas.get)
    .post(rubroempresas.post)
    .put(rubroempresas.put)
    .delete(rubroempresas.delete);
    
module.exports = router;