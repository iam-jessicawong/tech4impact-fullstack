const express = require("express")
const ParticipantController = require("../controllers/participant.controller")

const router = express.Router()

router.get("/", ParticipantController.getAll)

const ParticipantRouter = router
module.exports = ParticipantRouter