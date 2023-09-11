const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()


router.post("/user/add-user", userController.postNewUser);

router.get("/user/get-users", userController.getUsers);

router.delete("/user/delete-user/:userId", userController.deleteUser);

module.exports = router