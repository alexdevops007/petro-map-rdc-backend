const cors = require("cors");

const corsOptions = {
  origin: [
    "http://localhost:8080",
    "https://petro-map-rdc-frontend.vercel.app",
  ],
  optionsSuccessStatus: 200,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

module.exports = cors(corsOptions);
