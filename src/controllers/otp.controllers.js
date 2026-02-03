const otpservice = require("../Service/otp.services");
exports.sendOTP = async (req, res, next)=>{
    const otp=otpservice(req.body.email);
    res.status(200).json({
        otp
    })
}
