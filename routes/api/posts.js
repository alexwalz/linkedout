const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/posts"
router.route("/:id")
    .put(function(req, res) {
        postController.update(req, res);
    });

module.exports = router;