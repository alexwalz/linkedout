const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const mongoose = require("mongoose");
const db = require("../../models");
let session = require("express-session");
let MongoStore = require("connect-mongo")(session);
mongoose.Promise = global.Promise;
router.use(session({
    secret: 'dont die',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        url: process.env.MONGODB_URI || "mongodb://localhost/linkedOut"
    }),
    httpOnly: true,
    secure: false,
    maxAge: null,
    path: "/"
}));

// Matches with "/api/users"
router.route("/")
    .get(function (req, res) {
        usersController.findAll(req, res);
    })
    .post(function (req, res) {
        usersController.create(req, res);
    });

router.route("/login")
    .post(function (req, res) {
        usersController.login(req, res);
    })
    .get(function (req, res) {
        usersController.ActiveLogin(req, res);
    })
    .delete(function (req, res, next) {
        usersController.logout(req, res)
    });

router.route("/:id/languages")
    .put(function (req, res) {
        usersController.updateLanguages(req, res);
    })
    .post(function (req, res) {
        usersController.replaceLanguages(req, res);
    });

router.route("/:id/edit")
    .post(function (req, res) {
        usersController.updateUser(req, res);
    });

router.route("/addPost")
    .post(function (req, res) {
        usersController.addPost(req, res);
    });

// Matches with "/api/users/:id"
router
    .route("/:id")
    .get(function (req, res) {
        usersController.findById(req, res);
    })
    .put(function (req, res) {
        usersController.update(req, res);
    })
    .delete(usersController.remove);

module.exports = router;
