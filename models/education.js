const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationschema = new Schema({
    schoolName: {
        type: String,
        required: true,
        trim: true
    },
    locationState: {
        type: String,
        required: false,
        trim: true
    },
    locationCity: {
        type: String,
        required: false,
        trim: true
    },
    degree: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Education = mongoose.model("Education", educationschema);

module.exports = Education;