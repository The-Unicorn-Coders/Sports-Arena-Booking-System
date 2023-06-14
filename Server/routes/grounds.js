const express = require("express");
const router = express.Router();
const groundController = require("../controllers/groundController");

router.post("/ground", groundController.createGround);
router.get("/", groundController.getGrounds);
router.put("/update/:id", groundController.updateGround);
router.delete("/delete/:id", groundController.deleteGround);
router.get("/get/:id", groundController.getGround);

module.exports = router;
