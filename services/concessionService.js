const Concession = require("../models/Concession");
const NotificationService = require("./notificationService");

// Créer une nouvelle concession
async function createConcession(data) {
  const concession = new Concession(data);
  await concession.save();

  // Créer une notification après la création de la concession
  await NotificationService.createNotification({
    message: `La concession ${concession.name} a été créée.`,
    type: "Création de concession",
  });

  return concession;
}

// Obtenir toutes les concessions
async function getAllConcessions() {
  return Concession.find();
}

// Obtenir une concession par ID
async function getConcessionById(id) {
  return Concession.findById(id);
}

// Mettre à jour une concession
async function updateConcession(id, updateData) {
  const concession = await Concession.findById(id);
  if (!concession) {
    throw new Error("Concession non trouvée");
  }
  Object.assign(concession, updateData);
  await concession.save();

  // Créer une notification après la mise à jour de la concession
  await NotificationService.createNotification({
    message: `La concession ${concession.name} a été mise à jour.`,
    type: "Mise à jour de concession",
  });

  return concession;
}

// Supprimer une concession
async function deleteConcession(id) {
  const concession = await Concession.findByIdAndDelete(id);
  if (!concession) {
    throw new Error("Concession non trouvée");
  }

  // Créer une notification après la suppression de la concession
  await NotificationService.createNotification({
    message: `La concession ${concession.name} a été supprimée.`,
    type: "Suppression de concession",
  });

  return concession;
}

module.exports = {
  createConcession,
  getAllConcessions,
  getConcessionById,
  updateConcession,
  deleteConcession,
};
