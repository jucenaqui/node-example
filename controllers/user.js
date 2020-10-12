const User = require('../models/user');

function getUser(req,res){ 
    User.find(function(err, users) {
        if (err) {
            res.status(404).send({error: err});
        } else {
            res.status(200).send({users: users});
        }
    });
}

function getUserById(req,res){ 
    const id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) {
            res.status(404).send({error: err});
        } else {
            res.status(200).send({user: user});
        }   
    });
}

function saveUser(req,res){ 
    const body = req.body;
    const user = new User(body);
    user.save(user, function(err){
        if (err) {
            res.status(400).send({error: err});
        } else {
            res.status(201).send({message: 'usuario creado correctamente'});
        }
    });
}

function updateUser(req,res){ 
    const id = req.params.id;
    const userBody = req.body;
    User.findByIdAndUpdate(id, userBody, function(err, userUpdate) {
        if (err) {
            res.status(500).send({message: 'Error al actualizar el usuario'});
        } else {
            if (!userUpdate) {
                res.status(404).send({message:'no se pudo actualizar el usuario'})
            } else {
                res.status(200).send({user: userUpdate, message: 'usuario actualizado correctamente'});
            }
        }
    });
}

module.exports = {
    getUser,
    getUserById,
    saveUser,
    updateUser
}