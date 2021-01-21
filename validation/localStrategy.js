var LocalStrategy = require('passport-local').Strategy;
var db = require("../models");

const strategy = new LocalStrategy(
    {
        usernameField: "username"
    },
    function(email, username, password, done) {
        db.User.findOne({
            where: {
            email: email
            }
        },
            
         (err, user) => {
            if(err) {
                console.log('errors sux')
                return done(err)
            }
            if(!user) {
                console.log('waddup brother')
                return done(null, false, {message: "incorrect username"})
            }
            if(!user.validPassword(password)) {
                console.log('sorry')
                return done(null, false, {message: 'Incorrect password'})
            }
            console.log(user)
            return done(null, user)
        })
    }
)

module.exports = strategy;