const express = require("express");
const router = express.Router();
const User = require("../models/userSchema.js");
const wrapAsync = require("../utils/wrapAsync.js");


router.get("/login", (req, res) => {
    res.render("routes/user/login.ejs");
});

router.get("/signup", (req, res) => {
    res.render("routes/user/signup.ejs");
});

router.post("/signup", wrapAsync(async(req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        res.redirect("/");
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}));



module.exports = router;