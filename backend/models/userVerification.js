const mongoose = require('mongoose')
const userverificationSchema = new mongoose.Schema
({
    name:{
        type:String,
        required:true
    },        
    email:
    {
        type:String,
        required:true
    },
    otp:
    {
        type:String,
        required:true
    },
    created:
    {
        type:Date,
        expires:3000,
        default: Date.now
    }
})
const usereVrificationModel = mongoose.model("usereVrificationModel",userverificationSchema)
module.exports = usereVrificationModel;