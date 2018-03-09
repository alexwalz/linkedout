const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
const educationRoutes = require("./education");
const commentRoutes = require("./comments");

// user routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/education", educationRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
