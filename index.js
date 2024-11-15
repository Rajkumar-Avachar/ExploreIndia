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

app.get("/", (req, res) => {
    res.render("routes/index.ejs", { title: "Explore INDIA" });
});

app.get("/unesco", (req, res) => {
    res.render("routes/heritage/unesco.ejs", { title: "UNESCO World Heritage Sites" });
});

app.get("/religions", (req, res) => {
    res.render("routes/culture/religions.ejs", { title: "Explore INDIA | Religions" });
});

app.get("/festivals", (req, res) => {
    res.render("routes/culture/festivals.ejs", { title: "Explore INDIA | Festivals" });
});

app.get("/languages", (req, res) => {
    res.render("routes/culture/languages.ejs", { title: "Explore INDIA | Languages" });
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});