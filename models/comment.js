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
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model("Comment", commentschema);

module.exports = Comment;