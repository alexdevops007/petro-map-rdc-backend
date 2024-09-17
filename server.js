const colors = require("colors");
const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db");

dotenv.config();

const PORT = process.env.PORT || 3500;

// Connexion à la base de données
connectDB();

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.bold);
});
