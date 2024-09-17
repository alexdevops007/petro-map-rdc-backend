const authService = require("../services/authService");
const User = require("../models/User");

// Connexion
async function login(req, res) {
  const { email, password } = req.body;
  try {
    const { user, token } = await authService.login(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

// Déconnexion (invalide la session)
async function logout(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Invalidation de la session en mettant le token et expiresAt à null
    user.currentSession = { token: null, expiresAt: null };
    await user.save();

    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
}

module.exports = {
  login,
  logout,
};
