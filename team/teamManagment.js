const footballPlayers = require('../model/db.js');
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/FootballTeam");
}



app.post("/addPlayer", async (req, res) => {
  const playersValue = req.body;
  console.log(playersValue);
  try {
    const newFootballPlayer = new footballPlayers({
      "name": playersValue["name"],
      "touchDownThrown": playersValue["touchDownThrown"],
      "rushingYard": playersValue["rushingYard"],
      "sacks": playersValue["sacks"],
      "numberOfGoals": playersValue["numberOfGoals"],
    })
    await newFootballPlayer.save();
    res.status(201).json(newFootballPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});


app.get("/getFootballPlayerDetails", async (req, res) => {
  const playersValue = req.body;
  console.log(playersValue);
  try {
    const allPlayers = await footballPlayers.find();

    res.status(200).json(allPlayers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

app.patch("/updatePlayerDetail/:playerId", async (req, res) => {
  const playersValue = req.body;
  const playerID = req.params.playerId;
  console.log(playerID);
  try {
    await footballPlayers.findOneAndUpdate({
      _id: playerID,
    },
      {
        "name": playersValue["name"],
        "touchDownThrown": playersValue["touchDownThrown"],
        "rushingYard": playersValue["rushingYard"],
        "sacks": playersValue["sacks"],
        "numberOfGoals": playersValue["numberOfGoals"],
      })
    res.status(201).json({ status: "Player Updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

app.delete("/deletePlayerDetail/:playerId", async (req, res) => {
  const playersValue = req.body;
  const playerID = req.params.playerId;
  console.log(playerID);
  try {
    await footballPlayers.findOneAndRemove({
      _id: playerID,
    })
    res.status(201).json({ status: "Player Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

app.get("/mostRushingYardPlayerDetails", async (req, res) => {
  const playersValue = req.body;
  console.log(playersValue);
  try {
    const playerDetails = await footballPlayers.aggregate(
      [
        {
          $sort: { rushingYard: -1 }
        },
        { $limit: 1 }
      ]);

    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

app.get("/leastRushingYardPlayerDetails", async (req, res) => {
  const playersValue = req.body;
  console.log(playersValue);
  try {
    const playerDetails = await footballPlayers.aggregate(
      [
        {
          $sort: { rushingYard: 1 }
        },
        { $limit: 1 }
      ]);

    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

app.get("/mostTouchDownThrownPlayerDetails", async (req, res) => {
  const playersValue = req.body;
  console.log(playersValue);
  try {
    const playerDetails = await footballPlayers.aggregate(
      [
        {
          $sort: { touchDownThrown: -1 }
        },
        { $limit: 1 }
      ]);

    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

app.get("/mostToLeastGoalsPlayerDetails", async (req, res) => {
  const playersValue = req.body;
  console.log(playersValue);
  try {
    const playerDetails = await footballPlayers.aggregate(
      [
        {
          $sort: { numberOfGoals: -1 }
        }
      ]);

    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

app.get("/mostSacksPlayerDetails", async (req, res) => {
  const playersValue = req.body;
  console.log(playersValue);
  try {
    const playerDetails = await footballPlayers.aggregate(
      [
        {
          $sort: { sacks: -1 }
        },
        { $limit: 1 }
      ]);

    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});
app.listen(5000, () => {
  console.log("Connected");
});

main()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
