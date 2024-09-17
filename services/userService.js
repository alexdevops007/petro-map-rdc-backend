const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Create a new user
async function createUser(data) {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("Cet email est déjà utilisé.");
  }

  const user = new User(data);
  await user.save();
  return user;
}

// Get all users
async function getAllUsers() {
  return User.find().select("-password");
}

// Get a user by ID
async function getUserById(userId) {
  return User.findById(userId).select("-password");
}

// Update a user
async function updateUser(userId, updateData) {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("Utilisateur non trouvé.");
  }

  // Hash the password if provided
  if (updateData.password) {
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(updateData.password, salt);
  } else {
    delete updateData.password; // Ignore password update if not provided
  }

  Object.assign(user, updateData);
  await user.save();
  return user;
}

// Delete a user
async function deleteUser(userId) {
  return User.findByIdAndDelete(userId);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
