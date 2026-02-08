const User = require("../models/User");
const generatePassword = require("../utils/Password");
const bcrypt = require("bcrypt");

const UserService = async (data = {}, session = null) => {
    const { email } = data;

    try {
        // check existing user (respect session if provided)
        let findQuery = User.findOne({ email });
        if (session) findQuery = findQuery.session(session);
        const existingUser = await findQuery;
        if (existingUser) {
            return { success: false, message: "User already exists" };
        }

        // map incoming fields into the `profile` shape used by the model
        const incomingProfile = data.profile || {};
        const profile = {
            FileListirstName:
                incomingProfile.FileListirstName || data.firstName || "",
            MiddleName: incomingProfile.MiddleName || data.middleName || "",
            lastName: incomingProfile.lastName || data.lastName || "",
            DateOfBirth:
                incomingProfile.DateOfBirth || data.dateOfBirth || data.DOB || null,
            PhoneNumber:
                incomingProfile.PhoneNumber || data.phone || data.phoneNumber || "",
            EmergancyContactNumber:
                incomingProfile.EmergancyContactNumber || data.emergencyContact || "",
            StreeAddress: incomingProfile.StreeAddress || data.address || "",
            City: incomingProfile.City || data.city || "",
            State: incomingProfile.State || data.state || "",
            ZipCode: incomingProfile.ZipCode || data.zip || "",
        };

        const marketing =
            data.MarketingPreferences || data.marketingPreferences || "";

        // generate & hash password
        const password = generatePassword(10);
        const hashedPassword = await bcrypt.hash(password, 10);

        const userDoc = {
            email,
            password: hashedPassword,
            profile,
            MarketingPreferences: marketing,
            emailVerified: data.emailVerified || false,
        };

        // create user within optional session
        let newUser;
        if (session) {
            newUser = await new User(userDoc).save({ session });
        } else {
            newUser = await User.create(userDoc);
        }

        return { success: true, user: newUser, password };
    } catch (err) {
        return { success: false, message: err.message || "Failed to create user" };
    }
};

module.exports = UserService;