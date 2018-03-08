const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/:id")
    .put(function(req, res) {
        postsController.update(req, res);
    })
    .delete(function(req, res) {
        postsController.remove(req, res);
    });

module.exports = router;