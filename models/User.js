const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    reqiuire: true,
  },
  email: {
    type: String,
    reqiuire: true,
    unique: true,
  },
  password: {
    type: String,
    reqiuire: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
