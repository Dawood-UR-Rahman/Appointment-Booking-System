const OTP=require('../models/otp');
const {generateOTP}= require('../utils/otpgenrator');
const emailService= require("./email.service");
const sendOTP= async (email="")=>{
    const otpCode = generateOTP();
    const newOTP = await OTP.create({
        email,
        otp:otpCode
    });
    await emailService.sendOTPEmail(email,otpCode);
    return {
        message:"OTP sent successfully"
    }
}
const verifyOTP = async (email, otp)=>{
    const record = await OTP.findOne({email});
    if(!record){
        return {
            success:false,
            message:"OTP is expired or invalid please try again"
        }
    };
    if(record.otp !== otp){
        return {
            success:false,
            message:"Invalid OTP please try again"
        }
    }
    if(record.otp ==otp){
        await OTP.deleteOne({ email: email});
        return {
            success:true,
            message:"OTP verified successfully"
        }        
    }
    else{
        return {
            success:false,
            message:"OTP verification failed please try again"
        }
    }
}
module.exports = {sendOTP, verifyOTP}