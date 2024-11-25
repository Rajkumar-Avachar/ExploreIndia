const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/states", (req, res) => {
    res.render("routes/other/states.ejs", { title: "Explore INDIA | States and UTs" });
});

router.get("/about", (req, res) => {
    res.render("routes/other/about.ejs", { title: "Explore INDIA | About Us" });
});

module.exports = router;