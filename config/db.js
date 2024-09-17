const mongoose = require("mongoose");
const colors = require("colors")
const config = require("../config")

const connectDB = async () => {
  try {
    await mongoose.connect(config.DB_URI);
    console.log(
      `Connecté à la base de données: ${mongoose.connection.host}`.bgBlue.bold
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
