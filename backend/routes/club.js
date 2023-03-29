const express = require("express");
const {
  getClub,
  getClubs,
  createClub,
  updateClub,
  deleteClub,
} = require("../controllers/club");
const { protect, authorize } = require("../middlewares/auth");

const router = express.Router();

router.get("/", getClubs);
router.get("/:clubId", getClub);
router.post("/", protect, authorize("admin"), createClub);
router.put("/:clubId", protect, authorize("admin"), updateClub);
router.delete("/:clubId", protect, authorize("admin"), deleteClub);

module.exports = router;
