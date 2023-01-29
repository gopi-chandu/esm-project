const express = require("express");
const { register, login, getMe } = require("../controllers/auth");
const { protect } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/getme", protect, getMe);

module.exports = router;
