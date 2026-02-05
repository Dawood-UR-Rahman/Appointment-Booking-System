const InsuranceInfo= require('../models/insuranceInfo');
const User = require('../models/User');

exports.createInsuranceInfo = async (data, userId, session) => {
 const insuranceInfo = await InsuranceInfo.create({
    user:userId,
    memberFirstName: data.memberFirstName,
    memberLastName: data.memberLastName,
    memberDOB: data.memberDOB,
    insuranceName: data.insuranceName,
    insuranceID: data.insuranceID,
    policyHolder: data.policyHolder,
    ssnFrontFileUrl: data.ssnFrontFileUrl,
    ssnBackFileUrl: data.ssnBackFileUrl
 });
 return {
    success:true,
    message:"Insurance information created successfully",
    data:insuranceInfo
 }  
}