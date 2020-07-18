const mongoose = require("mongoose");
// Use config to store some default configuration
const config = require("config");
// Retrive mongoDB URI from config
const db = process.env.mongoURI || config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongpDB Connected");
  } catch (err) {
    console.error(err.message);
    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
