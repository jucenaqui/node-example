const express = require('express');
const router = express.Router();

const artistController = require('../controllers/artist');

router.get('/artist', artistController.getArtist);


module.exports = router;