const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    max: [25, "25 is maximum length"],
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports= mongoose.model("user",userSchema);