const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postschema = new Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
    messageType: {
        type: String,
        required: true,
        enum: ['JOB', 'RECRUITMENT', 'NEWS', 'THOUGHT']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postschema);

module.exports = Post;