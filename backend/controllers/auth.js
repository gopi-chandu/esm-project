const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
// @desc Register User
// @route POST /api/v1/auth/register
// @access Public
module.exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    const newUser = await User.create({
      name,
      email,
      password,
      role,
    });
    // send user,status code, response
    sendTokenResponse(newUser, 200, res);
  }

  return next(new ErrorResponse("User already exists ", 401));
});

// @desc login User
// @route POST /api/v1/auth/login
// @access Public
module.exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // fond and get the user
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("User not found ", 401));
  }
  // check for matching password
  const isMatch = await user.matchPassword(password);
  const token = await user.getJWTToken();
  if (!isMatch) {
    return next(new ErrorResponse("Invalid Password", 401));
  }
  sendTokenResponse(user, 200, res);
});

// @desc get My Profile
// @route POST /api/v1/auth/getme
// @access Private
module.exports.getMe = asyncHandler(async (req, res, next) => {
  // find and get the user
  const user = await User.findById(req.user.id).populate("club");
  return res.status(200).json({
    success: true,
    data: user,
  });
});

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getJWTToken();
  // console.log("User : ", token);
  let options = {
    expire: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE + 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  return res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token: token });
};
