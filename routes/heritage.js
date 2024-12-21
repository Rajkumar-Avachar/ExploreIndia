const express = require("express");
const router = express.Router({ mergeParams: true });
const UnescoSite = require("../models/unescoSchema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const controllers = require("../controllers/heritages.js");

router.get("/", controllers.index);

router.get("/unescoSites", controllers.allUnescoSites);

router.get("/unescoSites/:id", controllers.singleUnescoSite);

router.get("/temples", controllers.temples);

router.get("/forts", controllers.forts);

router.get("/cities", controllers.cities);



// apis

router.get("/unescoSites", wrapAsync(async (req, res) => {
    const unescosites = await UnescoSite.find();
    res.json(unescosites); // Send JSON
}));

module.exports = router;