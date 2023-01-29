const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");

// create a middleware to make sure the user is logged in
module.exports.protect = asyncHandler(async (req, res, next) => {
  // console.log("req user", req.headers);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookie.token) {
    token = req.cookie.token;
  }

  if (!token) {
    return next(new ErrorResponse("Not Authorized to access this route", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
    // const user = User.findOne({});
  } catch (err) {
    return next(new ErrorResponse("Not Authorized", 401));
  }
});
