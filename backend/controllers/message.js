const path = require("path");
const asyncHandler = require("../middlewares/async");
const Message = require("../models/Message");
const ErrorResponse = require("../utils/errorResponse");
// @desc get all messages
// @route GET /api/v1/message/
// @access Private
module.exports.getMessages = asyncHandler(async (req, res, next) => {
  // console.log(req.params)
  let messages = await Message.find({ room: req.params.room }).populate({
    path: "user",
  });
  return res.status(200).json({ sucess: true, data: messages });
});

// @desc Create an message
// @route POST /api/v1/message/
// @access Private
module.exports.createMessage = asyncHandler(async (req, res, next) => {
  let message = await Message.create(req.body);
  return res.status(200).json({ success: true, data: message });
});
