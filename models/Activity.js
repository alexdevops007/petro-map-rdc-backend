const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  concessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Concession",
    required: true,
  },
  message: { type: String, required: true },
  type: { type: String, required: true }, // "Incident", "Mise à jour", "Alerte", etc.
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Activity", activitySchema);
