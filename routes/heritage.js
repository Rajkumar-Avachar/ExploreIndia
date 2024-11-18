const express = require("express");
const router = express.Router({ mergeParams: true });
const { title } = require("process");
const mongoose = require("mongoose");
const UnescoSite = require("../models/schema.js");

router.get("/", (req, res) => {
    res.render("routes/index.ejs", { title: "Explore INDIA" });
});

router.get("/unescoSites", async (req, res) => {
    let unescosites = await UnescoSite.find();
    res.render("routes/heritage/unescoSites.ejs", { title: "UNESCO World Heritage Sites", unescosites },);
});


module.exports = router;