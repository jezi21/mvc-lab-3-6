const express = require('express');
const errorController = require('../controllers/error');

const router = express.Router();

// Ustawienie kontrolera błędów dla każdego żądania, które nie pasuje do innych tras
router.use(errorController.getNotFoundPage);

module.exports = router;