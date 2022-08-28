require("dotenv").config();
const mongoose = require("mongoose");
const URL =
  "mongodb+srv://rayen:<password>@cluster0.gkozpat.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(URL);

    console.log("db is successfully connected");
  } catch (error) {
    console.log("db failed to connect");
  }
};
module.exports = connectDb;
