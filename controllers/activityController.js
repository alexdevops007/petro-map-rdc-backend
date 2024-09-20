const activityService = require("../services/activityService");

// Récupérer toutes les activités
async function getAllActivities(req, res) {
  try {
    const activities = await activityService.getAllActivities();
    res.status(200).json(activities);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des activités" });
  }
}

module.exports = {
  getAllActivities,
};
