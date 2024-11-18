const express = require("express");
const app = express();
const router = express.Router({mergeParams: true});
// const path = require("path");
// const mongoose = require("mongoose");
// const ejsMate = require("ejs-mate");
const { title } = require("process");


router.get("/religions", (req, res) => {
    res.render("routes/culture/religions.ejs", { title: "Explore INDIA | Religions" });
});

router.get("/festivals", (req, res) => {
    res.render("routes/culture/festivals.ejs", { title: "Explore INDIA | Festivals" });
});

router.get("/languages", (req, res) => {
    res.render("routes/culture/languages.ejs", { title: "Explore INDIA | Languages" });
});

module.exports = router;