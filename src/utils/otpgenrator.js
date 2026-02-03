const crypto = require('crypto');

exports.generateOTP =()=>{
    const otp = crypto.randomInt(100000,999999).toString();
    return otp;
}