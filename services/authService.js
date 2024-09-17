const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwtConfig = require("../config/jwtConfig");

// Service de connexion
async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Email ou mot de passe incorrect");
  }

  const token = generateToken(user._id);
  user.currentSession = {
    token,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
  }; // Expire dans 24h
  await user.save();

  return { user, token };
}

// Génération du token JWT
function generateToken(userId) {
  return jwt.sign({ id: userId }, jwtConfig.secret, { expiresIn: "24h" });
}

// Vérification du token JWT
async function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    const user = await User.findById(decoded.id);
    return user;
  } catch (error) {
    throw new Error("Token invalide");
  }
}

module.exports = {
  login,
  generateToken,
  verifyToken,
};
