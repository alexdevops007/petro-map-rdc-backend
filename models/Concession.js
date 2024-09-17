const mongoose = require("mongoose");

const concessionSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: {
      type: String, // "Point"
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  operator: { type: String, required: true },
  status: {
    type: String,
    enum: ["Active", "Inactive", "Suspended"],
    default: "Active",
  },
  geologicalData: { type: String }, // URL ou description des données géologiques
  infrastructure: { type: String }, // URL ou description des infrastructures
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Mise à jour du champ updatedAt avant chaque sauvegarde
concessionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Index géospatial pour les requêtes basées sur la localisation
concessionSchema.index({ location: "2dsphere" });

const Concession = mongoose.model("Concession", concessionSchema);

module.exports = Concession;
