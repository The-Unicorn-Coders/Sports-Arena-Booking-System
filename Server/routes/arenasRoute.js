const express = require("express");
const router = express.Router();

const arena = require('../models/arena')

router.get("/getAllArenas", async(req,res) => {
    try {
        const arenas = await arena.find({})
        return res.json({ arenas });
    }catch(error){
        return res.status(400).json({message: error})
    }
});
module.exports = router;