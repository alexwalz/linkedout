const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classifiedschema = new Schema({
    contactName: {
        type: String,
        required: true,
        trim: true
    },
    contactEmail: {
        type: String,
        required: false,
        trim: true
    },
    contactPhone: {
        type: String,
        required: false,
        trim: true
    },
    positionDescription: {
        type: String,
        required: true,
        trim: true
    },
    positionResponsibilities: {
        type: String,
        required: false,
        trim: true
    },
    positionQualifications: {
        type: String,
        required: false,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Classified = mongoose.model("Classified", classifiedschema);

module.exports = Classified;