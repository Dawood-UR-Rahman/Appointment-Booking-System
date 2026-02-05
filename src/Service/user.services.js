const User = require("../models/User");
const generatePassword = require("../utils/Password");
const bcrypt = require("bcrypt");

const UserService = async (data={})=>{
    const{email, firstName, lastName, phone} = data;
    let existingUser = await User.findOne({email});
    if(existingUser){
        return {
            success:false,
            message:"User already exists"};
    }

    let password = generatePassword(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        email,
        firstName,
        lastName,
        phone,
        password: hashedPassword,
        role:"user"
    });
    const userData ={
        userId: newUser._id,
        email: newUser.email,
        password: password
    }
    return {
        success:true,
    };
}
 
module.exports = UserService;