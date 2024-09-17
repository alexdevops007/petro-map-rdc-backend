const socketIO = require("socket.io");

const initSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
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
