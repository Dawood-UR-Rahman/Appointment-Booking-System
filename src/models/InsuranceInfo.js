const mongoose = require("mongoose");

const insuracnceInfoSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    memberFirstName: { type: String, default: "" },
    memberLastName: { type: String, default: "" },
    memberDOB: { type: Date, default: null },
    insuranceName: { type: String, default: "" },
    insuranceID: { type: String, default: "" },
    policyHolder: { type: String, default: "" },
    ssnFrontFileUrl: { type: String, default: "" },
    ssnBackFileUrl: { type: String, default: "" },
    
},{ timestamps: true })

module.exports = mongoose.model("InsuranceInfo", insuracnceInfoSchema)