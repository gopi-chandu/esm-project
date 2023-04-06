const express = require("express");
const { getMessages, createMessage } = require("../controllers/message");

const router = express.Router();

router.get("/:room", getMessages);
router.post("/", createMessage);

module.exports = router;
