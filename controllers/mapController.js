const mapService = require("../services/mapService");

// Récupérer toutes les concessions pour les afficher sur la carte
async function getAllConcessions(req, res) {
  try {
    const concessions = await mapService.getAllConcessionsForMap();
    res.status(200).json(concessions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des concessions" });
  }
}

// Récupérer les détails d'une concession spécifique
async function getConcessionById(req, res) {
  try {
    const concession = await mapService.getConcessionDetails(req.params.id);
    if (!concession) {
      return res.status(404).json({ message: "Concession non trouvée" });
    }
    res.status(200).json(concession);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de la concession" });
  }
}

module.exports = {
  getAllConcessions,
  getConcessionById,
};
