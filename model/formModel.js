const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  concern: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  state: String,
  city: String,
  package: String,
  date: String,
});

mongoose.model("form", formSchema);
module.exports = mongoose.model("form");
