const controller = require('../controller/controller');

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/print', controller.tirarPrint);
router.get('/conteudo', controller.coletarConteudo);


module.exports = router;