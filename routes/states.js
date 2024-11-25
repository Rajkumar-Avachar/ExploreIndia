const express = require("express");
const router = express.Router({mergeParams: true});


router.get("/states", (req, res) => {
    res.render("routes/other/states.ejs", { title: "Explore INDIA | States/UTs" });
});

module.exports = router;