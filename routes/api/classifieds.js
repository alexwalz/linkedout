const router = require("express").Router();
const classifiedsController = require("../../controllers/classifiedsController");

// Matches with "/api/classifieds"
router.route("/")
    .post(function (req, res) {
        classifiedsController.create(req, res);
    })
    .get(function (req, res) {
        classifiedsController.findAll(req, res);
    })
    .put(function (req, res) {
        classifiedsController.update(req, res);
    })
    .delete(function (req, res) {
        classifiedsController.remove(req, res);
    });

module.exports = router;