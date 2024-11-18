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
    res.render("routes/heritage/unescoSites.ejs", { title: "UNESCO World Heritage Sites", unescosites });
});

router.get("/unescoSites/:id", async (req, res) => {
    let {id} = req.params;
    let unescosite = await UnescoSite.findById(id);
    res.render("routes/heritage/showUnescoSite.ejs", { title: "Site" , unescosite});
});

module.exports = router;