const express = require("express");
const {
  getClub,
  getClubs,
  createClub,
  updateClub,
  deleteClub,
} = require("../controllers/club");

const router = express.Router();

router.get("/", getClubs);
router.get("/:clubId", getClub);
router.post("/", createClub);
router.put("/:clubId", updateClub);
router.delete("/:clubId", deleteClub);

module.exports = router;
