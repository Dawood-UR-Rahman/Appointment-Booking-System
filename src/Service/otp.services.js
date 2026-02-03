const OTP=require('../models/otp');
const {generateOTP}= require('../utils/otpgenrator');

const sendOTP= async (email)=>{
    const otpCode = generateOTP();
    const newOTP = await OTP.create({
        email,
        otp:otpCode
    })
    return {
        message:"OTP sent successfully"
    }
}
module.exports = {sendOTP}