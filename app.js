const express = require("express");
const corsConfig = require("./config/corsConfig");
//const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

// Middleware
app.use(corsConfig);
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api PetroMap RDC" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api PetroMap RDC" });
});

// Middleware pour la gestion des erreurs
app.use(errorMiddleware);

module.exports = app;
