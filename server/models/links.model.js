const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
        required: true
    },
    originalLink: String,
    shortenedLink: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Links", LinkSchema);