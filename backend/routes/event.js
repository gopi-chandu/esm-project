const express = require("express");
const {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  eventUploadPhoto,
} = require("../controllers/event");
const advancedResults = require("../middlewares/advancedResults");
const Event = require("../models/Event");

const router = express.Router();

router.put("/:eventId/photo", eventUploadPhoto); // photo upload
router.get("/", advancedResults(Event), getEvents);
router.get("/:eventId", getEvent);
router.post("/", createEvent);
router.put("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);

module.exports = router;
