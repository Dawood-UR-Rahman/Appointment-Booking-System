const InsuranceService = require('../Service/insurance.services');

exports.createInsuranceInfo = async (req, res, next) => {
    const insuranceInfo = await InsuranceService.createInsuranceInfo(req.body);
    res.status(201).json({
        success:true,
        message:insuranceInfo.message
    })

}