const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/posts"
router.route("/")
    .post(function(req, res) {
        usersController.addPost(req, res);
    });

module.exports = router;