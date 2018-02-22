const router = require("express").Router();
const postsController = require("../../controllers/usersController");

// Matches with "/api/posts"
router.route("/")
    .post(usersController.addPost);

module.exports = router;