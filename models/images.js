const mongoose = require("mongoose");
const Schema = mongoose.Schema

var pic = new Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var pic = mongoose.model('images',pic);