const concessionService = require("../services/concessionService");

// Créer une nouvelle concession
async function createConcession(req, res) {
  try {
    const concession = await concessionService.createConcession(req.body);
    res.status(201).json(concession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Obtenir toutes les concessions
async function getAllConcessions(req, res) {
  try {
    const concessions = await concessionService.getAllConcessions();
    res.status(200).json(concessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Obtenir une concession par ID
async function getConcessionById(req, res) {
  try {
    const concession = await concessionService.getConcessionById(req.params.id);
    if (!concession) {
      return res.status(404).json({ message: "Concession non trouvée" });
    }
    res.status(200).json(concession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Mettre à jour une concession
async function updateConcession(req, res) {
  try {
    const concession = await concessionService.updateConcession(
      req.params.id,
      req.body
    );
    res.status(200).json(concession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Supprimer une concession
async function deleteConcession(req, res) {
  try {
    await concessionService.deleteConcession(req.params.id);
    res.status(200).json({ message: "Concession supprimée avec succès" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createConcession,
  getAllConcessions,
  getConcessionById,
  updateConcession,
  deleteConcession,
};
