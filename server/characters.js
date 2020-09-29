const express = require("express");
const router = express.Router();
const Character = require("./character");

router.get("/", async (req, res) => {
  // res.send("Hello World!");

  try {
    // finding all characters that fit the mongoose schema
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  console.log("server posting", req);
  const character = new Character({
    name: req.body.name,
    profession: req.body.profession
  });
  try {
    const newCharacter = await character.save();
    res.status(201).json(newCharacter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
