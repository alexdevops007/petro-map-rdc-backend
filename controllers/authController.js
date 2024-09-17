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
    user.currentSession = { token: null, expiresAt: null };
    await user.save();
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  login,
  logout,
};
