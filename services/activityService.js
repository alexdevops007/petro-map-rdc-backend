const Activity = require("../models/Activity");

// Créer une nouvelle activité
async function createActivity(data) {
  const activity = new Activity(data);
  return await activity.save();
}

// Service pour récupérer toutes les activités sans concessionId
async function getAllActivities() {
  return Activity.find().sort({ createdAt: -1 }); // Tri par la date de création
}

module.exports = {
  createActivity,
  getAllActivities,
};
