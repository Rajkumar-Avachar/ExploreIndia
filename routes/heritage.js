const express = require("express");
const router = express.Router({mergeParams: true});
const { title } = require("process");

router.get("/", (req, res) => {
    res.render("routes/index.ejs", { title: "Explore INDIA" });
});

router.get("/unescoSites", (req, res) => {
    res.render("routes/heritage/unescoSites.ejs", { title: "UNESCO World Heritage Sites" });
});

module.exports = router;