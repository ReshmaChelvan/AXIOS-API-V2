const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter The Name"],
  },
  username: {
    type: String,
    required: [true, "Enter The Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter The Email"],
  },
  address: {
    type: Object,
  },
});

const model = mongoose.model("user", schema);
exports.model = model;
