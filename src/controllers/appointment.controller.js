const AppointmentService = require("../Service/appointment.services");

exports.createFreeAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentService.createFreeAppointment(req.body);

    return res.status(201).json({
      success: true,
      message: "Free appointment booked successfully",
      data: appointment
    });

  } catch (error) {
    console.error("Create Free Appointment Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
