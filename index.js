const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const heritage = require("./routes/heritage.js");
const culture = require("./routes/culture.js");
const other = require("./routes/other.js");
const user = require("./routes/user.js");
const User = require("./models/userSchema.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passportLocal = require("passport-local");
const ExpressError = require("./utils/ExpressError.js");
const MongoStore = require('connect-mongo');

if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));


async function main() {
    const mongoURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Atlas successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
main();


app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        crypto: {
            secret: "thedarkknight"
        },
        touchAfter: 24 * 3600,
    }),
    secret: 'thedarkknight',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
}));



app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.error = req.flash("error");
    res.locals.user = req.user;
    next();
});

app.use("/", heritage, culture, user, other);



const heritageAPI = require("./routes/api/heritage.js");

app.use("/api", heritageAPI);



app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("routes/error/error.ejs", { message, title: "Error" });
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});