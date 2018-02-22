const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/education"
router.route("/")
    .post(usersController.addEduction);

