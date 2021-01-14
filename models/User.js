const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
mongoose.Promise = Promise;

const userSchema = new Schema({
    email: { type: String, unique: true, required: true},
    userName: { type: String, unique: false, required: true},
    password: { type: String, unique: false, required: true},
    date: { type: Date, default: Date.now }
})

userSchema.methods = {
    checkPassword: function(input){
        return bcrypt.compareSync(input, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

userSchema.pre('save', function(next) {
    if(!this.password) {
        console.log('models/user.js ======== NO PASSWORD PROVIDED ========')
        next();
    }else {
        console.log('model/user.js hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next();
    }
})

const User = moongoose.model("User", userSchema);
module.exports = User