const {sendEmail} = require("../utils/mailer");

const otpTemplate = require("../utils/emailTemplates/otp.template");

//OTP Email Service
exports.sendOTPEmail = async (email, otp)=>{
    await sendEmail({
        to:email,
        subject:"Your One Time Password (OTP)",
        html:otpTemplate(otp)
    })
}