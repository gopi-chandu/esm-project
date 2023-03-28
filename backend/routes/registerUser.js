const express = require("express");
const {
  RegisterForEvent,
  getAllReg,
  getRegUser,
} = require("../controllers/registerUser");
const { protect } = require("../middlewares/auth");

const router = express.Router();
router.post("/", protect, RegisterForEvent);
router.get("/", protect, getAllReg);
router.get("/:eventId", protect, getRegUser);

module.exports = router;
