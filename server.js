const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const app = require("./app");
const config = require("./config/dbConfig");

dotenv.config();

const PORT = process.env.PORT || 3500;

mongoose
  .connect(config.DB_URI)
  .then(() => {
    console.log(
      `Connecté à la base de données: ${mongoose.connection.host}`.bgBlue
    );
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`.bgGreen.bold);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`.bgRed);
  });
