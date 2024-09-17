const authService = require("../services/authService");

module.exports = async (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token manquant" });
  }

  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token manquant" });
  }

  try {
    const user = await authService.verifyToken(token);
    if (!user || !user.currentSession || user.currentSession.token !== token) {
      return res.status(401).json({ message: "Session invalide" });
    }

    if (new Date() > user.currentSession.expiresAt) {
      return res.status(401).json({ message: "Session expirée" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Erreur de vérification du token :", error.message);
    res.status(401).json({ message: "Token invalide" });
  }
};
