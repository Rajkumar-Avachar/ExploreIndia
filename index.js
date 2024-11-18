const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const heritage = require("./routes/heritage.js");
const culture = require("./routes/culture.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
const UnescoSite = require("./models/schema.js");

async function main() {
    const mongoURI = "mongodb+srv://rajavachar59:exploreindia@explore-india-db.57jx4.mongodb.net/exloreindiadb";

    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB Atlas successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
main();

app.use("/", heritage, culture);



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});