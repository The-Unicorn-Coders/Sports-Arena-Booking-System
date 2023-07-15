const express = require('express');
const router = express.Router();
const Arena = require("../models/arenaModel");
const arenaController = require('../controllers/arenaController');

router.get("/", arenaController.getAllArenas);
router.post("/", arenaController.addArena);

module.exports = router;