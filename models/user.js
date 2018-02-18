const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
  date: { type: Date, default: Date.now },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  about: { type: String, required: true },
  phone: { type: String},
  image_url: { type: String, required: true },
  job_title: { type: String, required: true },
  birthday: { type: String },
  current_company: { type: String},
  education: { type: String},
  location: { type: String, required: true },
  languages: [],
  connections:[]
});

const user = mongoose.model("user", userschema);

module.exports = user;
