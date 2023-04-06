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
const Club = require("../models/Club");
const { protect, authorize } = require("../middlewares/auth");

const router = express.Router();

router.put("/:eventId/photo", eventUploadPhoto); // photo upload
router.get(
  "/",
  advancedResults(Event, {
    path: "club",
    select: "title description",
  }),
  getEvents
);
router.get("/:eventId", getEvent);
router.post("/", protect, authorize("admin"),createEvent);
router.put("/:eventId", protect, authorize("admin"), updateEvent);
router.delete("/:eventId", protect,  authorize("admin"),deleteEvent);

module.exports = router;
