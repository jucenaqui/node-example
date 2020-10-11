const express = require('express');
const router = express.Router();

let users = [
    {id:'1',nombre:'carlos', edad:23, apellido:'suarez'},
    {id:'2',nombre:'maria', edad:21, apellido:'jaramillo'},
];
router.get('/user', function(req,res){ res.status(200).send({users})});
router.get('/user/:id', function(req,res){ 
    const id = req.params.id;
    const user = users.filter(user => user.id === id);
    res.status(200).send({user});
});

router.post('/user', function(req,res){ 
    const user = req.body;
    users.push(user);
    res.status(201).send({user});
});

router.put('/user/:id', function(req,res){ 
    const id = req.params.id;
    const userBody = req.body;
    users = users.map( user => {
        if (user.id === id ) {
            return userBody;
        } else {
            return user;
        }
    });
    
    res.status(200).send('usuario actualizado correctamente');
});


module.exports = router;