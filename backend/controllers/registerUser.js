const asyncHandler = require("../middlewares/async");
const RegisterUser = require("../models/RegisterUser");

// @desc get all registered users
// @route GET /api/v1/eventRegister
// @access Private
module.exports.getAllReg = asyncHandler(async (req, res, next) => {
  let regs = await RegisterUser.find()
    .populate({ path: "event" })
    .populate({ path: "user" });

  return res.status(200).json({
    success: true,
    data: regs,
  });
});

// @desc get a registered event detail with specific user
// @route GET /api/v1/eventRegister/:eventId
// @access Private
module.exports.getRegUser = asyncHandler(async (req, res, next) => {
  let reg = await RegisterUser.find({
    event: req.params.eventId,
    user: req.user._id,
  })
    .populate({ path: "event" })
    .populate({ path: "user" });

  if (reg) {
    return res.status(200).json({
      success: true,
      data: reg,
    });
  }
  return res.status(400).json({
    success: false,
    data: null,
  });
});

// @desc Register user for an event
// @route POST /api/v1/eventRegister
// @access Private

module.exports.RegisterForEvent = asyncHandler(async (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let roll = req.body.roll;
  let phone = req.body.phone;
  let user = req.user._id;
  let event = req.body.eventId;

  // console.log("User : ", user);
  // console.log("Event : ", event);

  let regUser = await RegisterUser.findOne({ user: user, event: event });
  if (!regUser) {
    // console.log("regUser", regUser);
    let reg = await RegisterUser.create({
      user: user,
      event: event,
      name: name,
      email: email,
      roll: roll,
      phone: phone,
    });
    return res.status(201).json({
      success: true,
      data: reg,
    });
  }
  // find event
  // find user
  // register them ir post request
  // done
  //   let event = await Event.findOne({ title: req.body.title });
  //   if (!event) {
  //     event = await Event.create(req.body);
  //     return res.status(200).json({ success: true, data: event });
  //   }
  return res.status(400).json({
    success: false,
    data: { msg: "user already registered or event not found" },
  });
});
