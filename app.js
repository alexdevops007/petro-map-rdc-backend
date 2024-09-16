const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

// Cors option
const corsOptions = {
  origin: ["http://localhost:8080", "https://hydro-contract.vercel.app"],
  optionsSuccessStatus: 200,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

// Middleware
app.use(cors(corsOptions));
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

module.exports = app;
