const mongoose = require("mongoose");



const playerSchema = new mongoose.Schema({
      name: String,
      touchDownThrown: Number,
      rushingYard: Number,
      sacks: Number,
      numberOfGoals: Number,
});
const player = mongoose.model("players", playerSchema);

module.exports = player;
