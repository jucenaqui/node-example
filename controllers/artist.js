const Artist = require('../models/artist');

function getArtist(req, res) {
    Artist.find(function(err, artists){
        if (err) {
            res.status(500).send({message:'error en la consulta de artistas'})
        } else {
            res.status(200).send({ artists: artists});
        }
    });
}

module.exports = {
    getArtist
}