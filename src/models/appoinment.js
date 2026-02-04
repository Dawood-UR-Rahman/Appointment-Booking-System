const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  // How the visit happens
  visitType: {
    type: String,
    enum: ["In-Person", "Telehealth"],
    required: true
  },

  // Payment type
  bookingType: {
    type: String,
    enum: ["free", "paid"],
    required: true
  },

  appointmentDate: {
    type: Date,
    required: true
  },

  appointmentTime: {
    type: String,
    required: true
  },

  // Payment info
  isPaid: {
    type: Boolean,
    default: false
  },

  amountPaid: {
    type: Number,
    default: 0
  },

  paymentHistory: [
    {
      transactionId: String,
      amount: Number,
      date: {
        type: Date,
        default: Date.now
      },
      status: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
      }
    }
  ],

  status: {
    type: String,
    enum: [
      "draft",
      "payment_pending",
      "confirmed",
      "completed",
      "cancelled"
    ],
    default: "draft"
  }

}, { timestamps: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);
