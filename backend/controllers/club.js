const asyncHandler = require("../middlewares/async");
const Club = require("../models/Club");
// @desc get clubs
// @route GET /api/v1/clubs/
// @access Private
module.exports.getClubs = asyncHandler(async (req, res, next) => {
  const clubs = await Club.find();
  return res.status(200).json({ success: true, data: clubs });
});
// @desc get a club
// @route GET /api/v1/clubs/:clubId
// @access Private
module.exports.getClub = asyncHandler(async (req, res, next) => {
  const club = await Club.findById(req.params.clubId);
  if (!club) {
    return res.status(400).json({ success: false, data: {} });
  }
  return res.status(200).json({ success: true, data: club });
});

// @desc Create an club
// @route POST /api/v1/clubs/
// @access Private
module.exports.createClub = asyncHandler(async (req, res, next) => {
  // each club will have an email to create
  let club = await Club.findOne({ title: req.body.title});
  if (!club) {
    club = await Club.create(req.body);
    return res.status(200).json({ success: true, data: club });
  }
  return res.status(400).json({ success: false, data: "club already exists" });
});

// @desc update a club
// @route PUT /api/v1/clubs/:clubId
// @access Private
module.exports.updateClub = asyncHandler(async (req, res, next) => {
  let club = await Club.findById(req.params.clubId);
  // console.log("req.params", req.params);
  if (!club) {
    return res.status(200).json({ success: false, data: {} });
  }
  club = await Club.findByIdAndUpdate(req.params.clubId, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ success: true, data: club });
});
// @desc delete a club
// @route DEL /api/v1/clubs/:clubId
// @access Private
module.exports.deleteClub = asyncHandler(async (req, res, next) => {
  let club = await Club.findById(req.params.clubId);
  // console.log(event);
  if (!club) {
    return res.status(200).json({ success: false, data: {} });
  }
  club = await Club.findByIdAndDelete(req.params.clubId);
  return res.status(200).json({ success: true, data: {} });
});
