const path = require("path");
const asyncHandler = require("../middlewares/async");
const Event = require("../models/Event");
const ErrorResponse = require("../utils/errorResponse");
// @desc get events
// @route GET /api/v1/events/
// @access Public
module.exports.getEvents = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedResults);
});
// @desc get an event
// @route GET /api/v1/events/:eventId
// @access Public
module.exports.getEvent = asyncHandler(async (req, res, next) => {
  // console.log(req.params.eventId);
  const event = await Event.findById(req.params.eventId);
  // console.log(event);
  if (!event) {
    return res.status(200).json({ success: false, data: {} });
  }
  return res.status(200).json({ success: true, data: event });
});

// @desc Create an event
// @route POST /api/v1/events/
// @access Private
module.exports.createEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findOne({ title: req.body.title });
  if (!event) {
    event = await Event.create(req.body);
    return res.status(200).json({ success: true, data: event });
  }
  return res.status(400).json({ success: false, data: {} });
});

// @desc update an event
// @route PUT /api/v1/events/:eventId
// @access Private
module.exports.updateEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.eventId);
  // console.log(event);
  if (!event) {
    return res.status(200).json({ success: false, data: {} });
  }
  event = await Event.findByIdAndUpdate(req.params.eventId, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ success: true, data: event });
});
// @desc delete an event
// @route DEL /api/v1/events/:eventId
// @access Private
module.exports.deleteEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.eventId);
  // console.log(event);
  if (!event) {
    return res.status(200).json({ success: false, data: {} });
  }
  event = await Event.findByIdAndDelete(req.params.eventId);
  return res.status(200).json({ success: true, data: {} });
});

// @desc Upload a photo for event
// @route PUT /api/v1/events/:eventId/photo
// @access Private
module.exports.eventUploadPhoto = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.eventId);
  if (!event) {
    return next(
      new ErrorResponse(`event is not found with id of ${req.params.id}`, 404)
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;
  // console.log(req.files.file)
  // make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an Image file`, 400));
  }

  //check file size
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an Image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  // we use path module to get the file extension , path.parse file and get extension
  file.name = `photo_${event._id}${path.parse(file.name).ext}`;
  console.log(file.name);
  // upload the file, mv is inbuilt fn from express file upload
  file.mv(`${process.env.FILE_UPLOAD_PATH}/events/${file.name}`, async (err) => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    // insert filename into database
    await Event.findByIdAndUpdate(req.params.id, { photo: file.name });
    res.status(200).json({ success: true, data: file.name });
  });
});
