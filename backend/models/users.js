var mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    // give the values scema ie the types of feilds  it si not always required


    name: String,
    email: String,
    password:String
});
const userModel = mongoose.model('users', UserSchema);
module.exports = userModel;