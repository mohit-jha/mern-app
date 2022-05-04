const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: "string",
    require: "true",
  },

  email: {
    type: "string",
    require: "true",
    unique: true,
  },
  password: {
    type: "string",
    require: "true",
  },
  mapData: [String],
  projectName: [String],

  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
