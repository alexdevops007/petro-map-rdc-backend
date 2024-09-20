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

    // Gestion des alertes
    socket.on("newAlert", (data) => {
      console.log("Nouvelle alerte reçue :", data);
      io.emit("alertNotification", data); // Diffuse l'alerte à tous les utilisateurs
    });

    socket.on("disconnect", () => {
      console.log("Un utilisateur s'est déconnecté");
    });
  });


  return io;
};

module.exports = initSocket;
