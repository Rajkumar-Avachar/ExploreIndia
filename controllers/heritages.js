const UnescoSite = require("../models/unescoSchema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");


module.exports.index = (req, res) => {
    res.render("routes/index.ejs", { title: "Explore INDIA" });
};

module.exports.allUnescoSites = wrapAsync(async (req, res) => {
    let unescosites = await UnescoSite.find();
    res.render("routes/heritage/unescoSites.ejs", { title: "UNESCO World Heritage Sites", unescosites });
});

module.exports.singleUnescoSite = wrapAsync(async (req, res, next) => {
    try {
        let { id } = req.params;
        let unescosite = await UnescoSite.findOne({ siteId: id })
        res.render("routes/heritage/showUnescoSite.ejs", { title: `${unescosite.title} - UNESCO World Heritage Sites`, unescosite });
    } catch (err) {
        next(new ExpressError(404, "The site id you have requested doesn't exist."));
    };
});

module.exports.temples = (req, res) => {
    res.render("routes/heritage/temples.ejs", { title: "Ancient Temples" });
};

module.exports.forts = (req, res) => {
    res.render("routes/heritage/forts.ejs", { title: "Forts in INDIA" });
};

module.exports.cities = (req, res) => {
    res.render("routes/heritage/cities.ejs", { title: "Historic Cities in INDIA" });
};