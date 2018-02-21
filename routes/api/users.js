const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const mongoose = require("mongoose");
const db = require("../../models");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
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
  .get(function(req, res){
    usersController.findAll(req, res);
  })
  .post(function(req, res){
    usersController.create(req, res);
  });

  router.route("/login")
  .post(function(req, res){
    usersController.login(req, res);
  })
  .get(function(req, res){
    usersController.ActiveLogin(req, res);
  })
  .delete(function(req, res, next){
    usersController.logout(req, res)
  });


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
