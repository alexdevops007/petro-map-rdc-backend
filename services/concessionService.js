const Concession = require("../models/Concession");

// Créer une nouvelle concession
async function createConcession(data) {
  const concession = new Concession(data);
  await concession.save();
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
  return concession;
}

// Supprimer une concession
async function deleteConcession(id) {
  const concession = await Concession.findByIdAndDelete(id);
  if (!concession) {
    throw new Error("Concession non trouvée");
  }
  return concession;
}

module.exports = {
  createConcession,
  getAllConcessions,
  getConcessionById,
  updateConcession,
  deleteConcession,
};
