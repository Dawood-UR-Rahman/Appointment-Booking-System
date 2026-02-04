const UserService = require('../Service/user.services');

exports.createUser = async (req, res, next)=>{
    const User= await UserService(req.body)
    console.log(User);
    res.status(201).json({
        data:User
    })
}