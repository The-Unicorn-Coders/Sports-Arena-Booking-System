const express = require("express");
const router = express.Router();
const courtController = require("../controllers/courtsController");

router.post("/", courtController.createCourt);
router.get("/", courtController.getCourts);
router.put("/update/:id", courtController.updateCourt);
router.delete("/delete/:id", courtController.deleteCourt);

module.exports = router;
