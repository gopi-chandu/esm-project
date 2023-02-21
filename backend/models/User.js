const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
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
  photo: {
    type: String,
    default: "no-photo.png",
  },
  role: {
    type: String,
    enum: ["admin", "user", "club-owner"],
    default: "user",
  },
  password: {
    type: String,
    select: false,
    minLength: 6,
    required: [true, "Please add a password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Encrypt password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  // Hashing should only happen if the password field is modified , so we use thsi check, if we update user and the password does not modify then also this function will rerun and hash it again , to avoid such doubel hasjing on update user we use this function
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// JWT token sending
UserSchema.methods.getJWTToken = function () {
  // use id for key in web token
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", UserSchema);
