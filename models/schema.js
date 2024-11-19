const mongoose = require("mongoose");

const unescoSchema = new mongoose.Schema({
    title: String,
    image: [String],
    location: String,
    yearOfInscription: Number,
    siteId: Number,
    video: String,
    description: [String],
    category: String,
});

const UnescoSite = mongoose.model("UnescoSite", unescoSchema);

module.exports = UnescoSite;