const express = require('express');
const router = express.Router();

const albums = [
    {id:'1',nombre:'dark side on the moon', fechaCreacion:'12-02-1988', grupo:'pink floid'},
    {id:'2',nombre:'innuendo', fechaCreacion:'12-02-2001', grupo:'queen'},
];
router.get('/album/', function(req,res){ res.status(200).send({albums})});
router.get('/album/:id', function(req,res){ 
    const id = req.params.id;
    const album = albums.filter(album => album.id === id);
    res.status(200).send({album});
});

module.exports = router;
