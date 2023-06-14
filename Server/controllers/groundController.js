const Ground = require("../models/ground");

exports.createGround = async (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const city = req.body.city;
    const location = req.body.location;

    const newGround = new Ground({
        name,
        address,
        city,
        location,
    });

    try {
        await newGround.save();
        res.json("Ground Added");
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

exports.getGrounds = async (req, res) => {
    try {
        const grounds = await Ground.find();
        res.json(grounds);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

exports.updateGround = async (req, res) => {
    const groundId = req.params.id;
    const { name, address, city } = req.body;

    const updateGround = {
        name,
        address,
        city,
    };

    try {
        const updatedGround = await Ground.findByIdAndUpdate(groundId, updateGround);
        res.status(200).json({ status: "Ground updated", ground: updatedGround });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error" });
    }
};

exports.deleteGround = async (req, res) => {
    const groundId = req.params.id;

    try {
        await Ground.findByIdAndDelete(groundId);
        res.status(200).json({ status: "Ground deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "Error" });
    }
};

exports.getGround = async (req, res) => {
    const groundId = req.params.id;

    try {
        const ground = await Ground.findById(groundId);
        res.status(200).json({ status: "Ground fetched", ground: ground });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "Error" });
    }
};
