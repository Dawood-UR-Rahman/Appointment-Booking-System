const mongoose = require("mongoose");

const appointmentSchema = new mongoos.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    visitType:{
        type:String,
        enum:["In-Person","Telehealth"],
        required:true
    },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    isPaid: { type: Boolean, default: false },
    amountPaid: { type: Number, default: 0 },
    paymentHistory: [
      {
        transactionId: { type: String },
        amount: { type: Number },
        date: { type: Date, default: Date.now },
        status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" }
      }
    ],
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending"
    }
},{ timestamps: true })

module.exports = mongoose.model("Appointment", appointmentSchema);
