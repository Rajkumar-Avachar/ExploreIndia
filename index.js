const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const { title } = require("process");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use('*.css', (req, res, next) => {
    res.set('Cache-Control', 'no-store');  // Prevent caching
    next();
});



app.get("/", (req, res) => {
    res.render("routes/index.ejs", { title: "Explore INDIA" });
});

app.get("/unesco", (req, res) => {
    res.render("routes/unesco.ejs", { title: "UNESCO World Heritage Sites" });
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});