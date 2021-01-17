// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
// mongoose.Promise = Promise;

// const userSchema = new Schema({
//     email: { type: String, unique: true, required: true},
//     userName: { type: String, unique: false, required: true},
//     password: { type: String, unique: false, required: true},
//     date: { type: Date, default: Date.now }
// })

// userSchema.methods = {
//     checkPassword: function(input){
//         return bcrypt.compareSync(input, this.password)
//     },
//     hashPassword: plainTextPassword => {
//         return bcrypt.hashSync(plainTextPassword, 10)
//     }
// }

// userSchema.pre('save', function(next) {
//     if(!this.password) {
//         console.log('models/user.js ======== NO PASSWORD PROVIDED ========')
//         next();
//     }else {
//         console.log('model/user.js hashPassword in pre save');
//         this.password = this.hashPassword(this.password)
//         next();
//     }
// })

// const User = moongoose.model("User", userSchema);
// module.exports = User

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false

    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};