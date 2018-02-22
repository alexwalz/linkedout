const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/posts"
router.route("/")
    .post(usersController.addPost);

module.exports = router;