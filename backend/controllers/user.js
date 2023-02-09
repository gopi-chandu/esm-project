const asyncHandler = require("../middlewares/async");
const User = require("../models/User");
// @desc get users
// @route GET /api/v1/users/
// @access Private
module.exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  return res.status(200).json({ success: true, data: users });
});
// @desc get a user
// @route GET /api/v1/users/:userId
// @access Private
module.exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(400).json({ success: false, data: {} });
  }
  return res.status(200).json({ success: true, data: user });
});

// @desc Create an user
// @route POST /api/v1/users/
// @access Private
module.exports.createUser = asyncHandler(async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    user = await User.create(req.body);
    return res.status(200).json({ success: true, data: "User Created" });
  }
  return res.status(400).json({ success: false, data: "User already exists" });
});

// @desc update a user
// @route PUT /api/v1/users/:userId
// @access Private
module.exports.updateUser = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.userId);
  // console.log("req.params", req.params);
  if (!user) {
    return res.status(200).json({ success: false, data: {} });
  }
  user = await User.findByIdAndUpdate(req.params.userId, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ success: true, data: user });
});
// @desc delete a user
// @route DEL /api/v1/users/:userId
// @access Private
module.exports.deleteUser = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.userId);
  // console.log(event);
  if (!user) {
    return res.status(200).json({ success: false, data: {} });
  }
  user = await User.findByIdAndDelete(req.params.userId);
  return res.status(200).json({ success: true, data: {} });
});
