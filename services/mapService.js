const Concession = require("../models/Concession");

// Obtenir toutes les concessions avec leurs coordonnées géographiques
async function getAllConcessionsForMap() {
  return Concession.find({}, { name: 1, location: 1, operator: 1 }); // Récupère uniquement le nom et la localisation
}

// Obtenir les détails d'une concession spécifique par ID
async function getConcessionDetails(id) {
  return Concession.findById(id, {
    name: 1,
    location: 1,
    operator: 1,
    geologicalData: 1,
    infrastructure: 1,
  });
}

module.exports = {
  getAllConcessionsForMap,
  getConcessionDetails,
};
