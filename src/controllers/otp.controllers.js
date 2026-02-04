const {sendOTP, verifyOTP} = require("../Service/otp.services");
exports.checkemail = async (req, res, next)=>{
    const otp=await sendOTP(req.body.email);
    res.status(200).json({
        success:true,
        message:otp.message
    })
}
exports.verifyotp = async (req, res, next) =>{
    const {email, otp} = req.body;
    const verificationResult = await verifyOTP(email, otp)
    res.status(200).json({
        success:verificationResult.success,
        message:verificationResult.message
    })
}