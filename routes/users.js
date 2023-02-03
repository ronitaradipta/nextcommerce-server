const express = require("express");
const router = express.Router();

const usersController = require("../controllers");

router.get("/", usersController.getAll);
router.post("/register", usersController.register);
router.post("/login", usersController.login);

module.exports = router;
