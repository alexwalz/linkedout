const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentschema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const comment = mongoose.model("comment", commentschema);

module.exports = comment;