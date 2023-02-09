const express = require("express");
const {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event");

const router = express.Router();

router.get("/", getEvents);
router.get("/:eventId", getEvent);
router.post("/", createEvent);
router.put("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);

module.exports = router;
