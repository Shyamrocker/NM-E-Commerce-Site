const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  clientName: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  city: String,
  country: String,
  zip: String,
});

module.exports = mongoose.model("User", userSchema);
