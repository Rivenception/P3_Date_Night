const db = require("../models");

module.exports = {
    registerUser: function (req, res) {
        console.log("user signup");
        const {email, username, password } = req.body;

        db.User
            .findOne({
                 where: {
                 username: username 
                 }
            },
                
                (err, user) => {
                if(err){
                    console.log('User.js post error: ', err)
                }else if (user) {
                    res.json({
                        error: `Sorry, already a user with the username: ${username}`
                    })
                }
                else {
                    const newUser =  new db.User({
                        email: email,
                        username: username,
                        password: password
                    })
                    newUser.save((err, savedUser) => {
                        if(err) return res.json(err)
                        res.json(savedUser)
                    })
                }
            })
    }


}