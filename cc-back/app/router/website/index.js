const express = require('express');
const path = require('path');

const router = express.Router();

router.use((_, res, next) => {
    // On défini le content-type de la réponse en html pour détection de format d'erreur
    res.type('html');
    next();
});

// All other GET requests not handled before will return our React app
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../cc-front/dist', 'index.html'));
});

module.exports = router;
