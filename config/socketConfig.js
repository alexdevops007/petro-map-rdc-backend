const socketIO = require("socket.io");

const initSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:8080", // Adresse du frontend
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Un utilisateur est connecté à Socket.IO");

    socket.on("disconnect", () => {
      console.log("Un utilisateur s'est déconnecté");
    });

    // Ajouter des événements personnalisés ici si nécessaire
  });

  return io;
};

module.exports = initSocket;
