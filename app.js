const express = require("express");
const corsConfig = require("./config/corsConfig");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const initSocket = require("./config/socketConfig");
const http = require("http");

const app = express();

// Middleware
app.use(corsConfig);
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

app.use("/proxy", (req, res) => {
  const url = "https://petro-map-rdc-backend.vercel.app" + req.url;
  req.pipe(request({ qs: req.query, uri: url })).pipe(res);
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api PetroMap RDC" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api PetroMap RDC" });
});

// Middleware pour la gestion des erreurs
app.use(errorMiddleware);

// Serveur HTTP et Socket.IO
const server = http.createServer(app);

// Initialiser Socket.IO
initSocket(server);

module.exports = { app, server };
