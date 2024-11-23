const express = require("express");
const router = express.Router();
const User = require("../models/userSchema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");


router.get("/login", (req, res) => {
    res.render("routes/user/login.ejs");
});

router.get("/signup", (req, res) => {
    res.render("routes/user/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        })
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}));

router.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    async (req, res) => {
        res.redirect("/");
    }
);

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});


router.get("/profile", (req, res) => {
    let { username, email } = req.user;
    res.render("routes/user/profile.ejs", { title: "Profile", username, email });
});


module.exports = router;