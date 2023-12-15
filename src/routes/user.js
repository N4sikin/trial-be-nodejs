const express = require('express');
const userController = require('../controllers/user')

const router = express.Router();

router.post("/add", userController.createNewUser);
router.get("/list", userController.getAllUsers);
router.get("/:id", userController.getDetailUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;