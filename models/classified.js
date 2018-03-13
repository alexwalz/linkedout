const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classifiedschema = new Schema({
    contact_name: {
        type: String,
        required: true,
        trim: true
    },
    contact_email: {
        type: String,
        required: false,
        trim: true
    },
    phone_number: {
        type: String,
        required: false,
        trim: true
    },
    additional_info: {
        type: String,
        required: false,
        trim: true
    },
    job_title: {
        type: String,
        required: false,
        trim: true
    },
    company_name: {
        type: String,
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: false,
        trim: true
    },
    state: {
        type: String,
        required: false,
        trim: true
    },
    zip: {
        type: String,
        required: false,
        trim: true
    },
    position_description: {
        type: String,
        required: true,
        trim: true
    },
    position_responsibilities: {
        type: String,
        required: false,
        trim: true
    },
    position_qualifications: {
        type: String,
        required: false,
        trim: true
    },
    category: {
        type: String,
        required: false,
        trim: true
    },
    salaryFrom: {
        type: String,
        required: false,
        trim: true
    },
    salaryTo: {
        type: String,
        required: false,
        trim: true
    },
    jobType: {
        type: String,
        required: false,
        trim: true
    },
    eduLevel: {
        type: String,
        required: false,
        trim: true
    },
    yearsOfExp: {
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