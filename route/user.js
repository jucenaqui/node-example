const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

router.get('/user', UserController.getUser);
router.get('/user/:id', UserController.getUserById);
router.post('/user', UserController.saveUser);
router.put('/user/:id', UserController.updateUser);

module.exports = router;