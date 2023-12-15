const express = require('express');
const userController = require('../controllers/user.js')

const router = express.Router();

router.get('/list', userController.getAllUsers);
router.post('/add', userController.createNewUser);

module.exports = router;