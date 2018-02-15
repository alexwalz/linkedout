const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
});

const user = mongoose.model("user", userschema);

module.exports = user;
