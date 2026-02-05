const Appointment = require("../models/appoinment");
const User = require("../models/User");

exports.createFreeAppointment = async (data, UserId, session) => {
   // 2. Create FREE appointment
  const appointment = await Appointment.create({
    user:UserId,
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
