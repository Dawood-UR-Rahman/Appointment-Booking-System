const mongoose = require("mongoose");
const UserService = require("../Service/user.services");
const AppointmentService = require("../Service/appointment.services");
const InsuranceService = require("../Service/insurance.services");

exports.createUserWithAppointmentAndInsurance = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      userInfo,
      appointmentInfo,
      insuranceInfo
    } = req.body;

    // 1. Create User
    const userResult = await UserService(userInfo, session);

    if (!userResult.success) {
      throw new Error(userResult.message);
    }

    const userId = userResult.user._id;

    // 2. Create Appointment
    const appointment = await AppointmentService.createFreeAppointment(
      appointmentInfo,
      userId,
      session
    );

    // 3. Create Insurance Info
    const insurance = await InsuranceService.createInsuranceInfo(
      insuranceInfo,
      userId,
      session
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      success: true,
      message: "User onboarding completed successfully",
      data: {
        userId,
        appointment,
        insurance
      }
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
