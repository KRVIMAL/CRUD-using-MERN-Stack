const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;
exports.connection = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`connection successfull ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
      console.log("connection failed");
      process.exit(1);
    });
};
