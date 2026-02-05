const InsuranceInfo= require('../models/insuranceInfo');
const User = require('../models/User');

exports.createInsuranceInfo = async (data) => {
 const user = await User.findOne({email:data.email});
 console.log(user);
 if(!user){
    throw new Error("User not found");
 } 
 const insuranceInfo = await InsuranceInfo.create({
    user: user._id,
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