const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");

function generateToken(userId) {
  return jwt.sign({ id: userId }, jwtConfig.secret, { expiresIn: "24h" });
}

function verifyToken(token) {
  return jwt.verify(token, jwtConfig.secret);
}

module.exports = {
  generateToken,
  verifyToken,
};
