const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/:id")
    .put(function(req, res) {
        commentsController.update(req, res);
    })
    .delete(function(req, res) {
        commentsController.remove(req, res);
    });

module.exports = router;