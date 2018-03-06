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
        enum: ['Job Posting', 'Recruitment', 'News Feed', 'Thought']
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "comment"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postschema);

module.exports = Post;