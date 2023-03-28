const mongoose = require("mongoose");

const RegisterUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  roll: {
    type: String,
  },
  phone: {
    type: String,
    maxlength: 10,
    required: [true, "Please add a phone number"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: "Event",
    required: true,
  },
});

module.exports = mongoose.model("RegisterUser", RegisterUserSchema);
