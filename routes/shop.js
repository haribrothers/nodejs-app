const express = require('express');
const router = express.Router();

const path = require('path');
const routeDir = require('../utils/path')

router.get('/',(req, res, next) => {
    // res.send('<h1>Helloo from Express</h1>');
    res.sendFile(path.join(routeDir,'views', 'shop.html'))
});

module.exports = router;