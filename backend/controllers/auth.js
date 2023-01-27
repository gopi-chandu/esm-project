const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
// @desc Register User
// @route POST /api/v1/auth/register
// @access Public
module.exports.register = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    const newUser = await User.create({
      name,
      email,
      password,
      role,
    });
    return res.status(200).json({ success: true });
  }

  return next(new ErrorResponse("User already exists ", 401));
};

// @desc login User
// @route POST /api/v1/auth/login
// @access Public
module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // fond and get the user
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("User not found ", 401));
  }
  // check for matching password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid Password", 401));
  }
  return res.status(200).json({ success: true });
};
