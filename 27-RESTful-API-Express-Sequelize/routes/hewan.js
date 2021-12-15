const express = require("express")
const router = express.Router()
const HewanController = require("../controllers/hewan.controller")

router.get("/", HewanController.getAll)
router.get("/:id", HewanController.getByID)
router.post("/", HewanController.addHewan)
router.put("/:id", HewanController.updateHewan)
router.delete("/:id", HewanController.deleteHewan)

module.exports = router