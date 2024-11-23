const express = require("express");
const router = express.Router({ mergeParams: true });
const UnescoSite = require("../models/unescoSchema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

router.get("/", (req, res) => {
    res.render("routes/index.ejs", { title: "Explore INDIA" });
});

router.get("/unescoSites", wrapAsync(async (req, res) => {
    let unescosites = await UnescoSite.find();
    res.render("routes/heritage/unescoSites.ejs", { title: "UNESCO World Heritage Sites", unescosites });
}));

router.get("/unescoSites/:id", wrapAsync(async (req, res, next) => {
    try {
        let { id } = req.params;
        let unescosite = await UnescoSite.findOne({ siteId: id })
        res.render("routes/heritage/showUnescoSite.ejs", { title: `${unescosite.title} - UNESCO World Heritage Sites`, unescosite });
    } catch (err) {
        next(new ExpressError(404, "Invalid Request"));
    };
}));

module.exports = router;