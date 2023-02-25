const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//load env vars
dotenv.config({ path: "./config/config.env" });

// load models
// const Bootcamp = require("./models/Bootcamp");
// const Course = require("./models/Course");
// const User = require("./models/User");
// const Review = require("./models/Review");
const Event = require("./models/event");

// connect to DB
mongoose.connect(process.env.MONGO_URI, {});

// Read JSON files
// const bootcamps = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/bootcamps.json`, `utf-8`)
// );
// const courses = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/courses.json`, `utf-8`)
// );
// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/users.json`, `utf-8`)
// );
// const reviews = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/reviews.json`, `utf-8`)
// );
const events = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/events.json`, `utf-8`)
);

// import into DB
const importData = async () => {
  try {
    // await Bootcamp.create(bootcamps);
    // await Course.create(courses);
    // await User.create(users);
    // await Review.create(reviews);
    await Event.create(events);

    console.log("Data Imported ...".green.inverse);
    process.exit(1);
  } catch (error) {
    console.error(error);
  }
};

// Delete data
const deleteData = async () => {
  try {
    // await Bootcamp.deleteMany();
    // await Course.deleteMany();
    // await User.deleteMany();
    // await Review.deleteMany();
    await Event.deleteMany();
    console.log("Data destroyed ...".red.inverse);
    process.exit(1);
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
