const mongoose = require("mongoose");

const unescoSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
});

const UnescoSite = mongoose.model("UnescoSite", unescoSchema);

module.exports = UnescoSite;