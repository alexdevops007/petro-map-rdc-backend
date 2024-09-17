const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:8080", "https://hydro-contract.vercel.app"],
  optionsSuccessStatus: 200,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

module.exports = cors(corsOptions);
