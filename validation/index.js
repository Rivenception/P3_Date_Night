var passport = require('passport');
const LocalStrategy = require('./localStrategy')

var db = require("../models");

passport.serializeUser((user, done) => {
    console.log('*** Serialize User called, user: ', user)
    console.log('--------------')
    done(null, {id: user.id})
})

passport.deserializeUser((id, done) => {
    db.User.findOne({
        where: {
        id: id,
        username: 'username',
        }
    },
        (err, user) => {
            console.log('*** Deserialize user, user: ', user)
            console.log('-----------------');
            done(err, user)
        }
    )
})

passport.use(LocalStrategy)

module.exports = passport;