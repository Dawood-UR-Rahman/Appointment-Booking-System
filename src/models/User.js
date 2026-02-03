const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    emailVerifiedAt:Date,

    profile:{
        FileListirstName:String,
        MiddleName:String,
        lastName:String,
        DateOfBirth:Date,
        PhoneNumber:String,
        EmergancyContactNumber:String,
        StreeAddress:String,
        City:String,
        State:String,
        ZipCode:String,
    },
    MarketingPreferences:String,
    },  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);