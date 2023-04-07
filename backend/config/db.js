const mongoose = require("mongoose");

const connectDB = async () => {
  // console.log(process.env.MONGO_URI);
  const conn = await mongoose.connect('mongodb+srv://gopi:gopi@social-media-app-databa.nrme7bh.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
    // useUnifiedTopology: true,
  });

  console.log(
    `MongoDB is connected : ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
