const Appointment = require("../models/appoinment");
const User = require("../models/User");

exports.createFreeAppointment = async (data) => {
  // 1. Find user
  const user = await User.findOne({ email: data.email });

  if (!user) {
    throw new Error("User not found");
  }

  // 2. Create FREE appointment
  const appointment = await Appointment.create({
    user: user._id,

    bookingType: "free",
    visitType: data.visitType, // In-Person | Telehealth

    appointmentDate: data.appointmentDate,
    appointmentTime: data.appointmentTime,

    isPaid: true,
    amountPaid: 0,

    status: "confirmed"
  });

  return appointment;
};
