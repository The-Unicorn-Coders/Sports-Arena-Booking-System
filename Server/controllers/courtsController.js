const Court = require("../models/courts");

exports.createCourt = async (req, res) => {
    const name = req.body.name;
    const sports = req.body.sports;
    const price = req.body.price;
    const opening_time = req.body.opening_time;
    const closing_time = req.body.closing_time;

    const newCourt = new Court({
        name: name,
        sports: sports,
        opening_time: opening_time,
        closing_time : closing_time,
        price : price,
    });

    try {
        await newCourt.save();
        console.log("success");
        console.log(req);
        res.sendStatus(200);
    } catch (err) {
        console.log("Error");
        console.log(err);
        res.sendStatus(500);
    }
};

exports.getCourts = async (req, res) => {
    try {
        const courts = await Court.find();
        res.json(courts);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

exports.updateCourt = async (req, res) => {
    const courtId = req.params.id;
    const { name, sports, opening_time, closing_time, price } = req.body;

    const updateCourt = {
        name,
        sports,
        opening_time,
        closing_time,
        price,
    };

    try {
        const updatedCourt = await Court.findByIdAndUpdate(courtId, updateCourt);
        res.status(200).json({ status: "Court updated", court: updatedCourt });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error" });
    }
};

exports.deleteCourt = async (req, res) => {
    const courtId = req.params.id;

    try {
        await Court.findByIdAndDelete(courtId);
        res.status(200).json({ status: "Court deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "Error" });
    }
};
