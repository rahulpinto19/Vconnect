const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema
({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        default:Date.now
    }
});
const Usermodel =mongoose.model("Usermodel", UserSchema);
Usermodel.createIndexes();//this is to create the unique elements
module.exports = Usermodel;