const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const { title } = require("process");

res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
res.setHeader('Pragma', 'no-cache');
res.setHeader('Expires', '0');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
    res.render("routes/index.ejs", {title: "Explore INDIA"});
});

app.get("/unesco", (req, res) => {
    res.render("routes/unesco.ejs", {title: "UNESCO World Heritage Sites"});
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});