const router = require('express').Router();
const apiController = require("../../controllers/apiController");
const passport = require('../../validation')

router.route('/')
    .post(passport.authenticate('local'), (req,res) => {
        console.log('logged in', req.body.username);
        var userInfo = {
            username: req.body.username
        };
        res.send(userInfo)
    })

router.route("/new")
    .post(apiController.registerUser)

module.exports = router;