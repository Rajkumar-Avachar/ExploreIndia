const express = require("express");
const router = express.Router();
const UnescoSite = require("../../models/unescoSchema.js"); // Adjust the path as needed
const wrapAsync = require("../../utils/wrapAsync.js");

// Get all UNESCO sites
router.get("/unescoSites", wrapAsync(async (req, res) => {
    const unescosites = await UnescoSite.find();
    res.json(unescosites); // Send JSON
}));

// Get a specific UNESCO site by ID
router.get("/unescoSites/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const unescosite = await UnescoSite.findOne({ siteId: id });
    if (!unescosite) {
        return res.status(404).json({ error: "Site not found" });
    }
    res.json(unescosite);
}));

module.exports = router;
