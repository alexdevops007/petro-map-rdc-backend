const express = require("express");
const corsConfig = require("./config/corsConfig");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const socketIO = require("socket.io");
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
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:8080", // URL Frontend
    methods: ["GET", "POST"],
  },
});

// Configuration de Socket.IO
io.on("connection", (socket) => {
  console.log("Un utilisateur est connecté");

  socket.on("disconnect", () => {
    console.log("Un utilisateur s'est déconnecté");
  });

  // Ajoutez ici des écouteurs d'événements personnalisés
});

module.exports = { app, server };
