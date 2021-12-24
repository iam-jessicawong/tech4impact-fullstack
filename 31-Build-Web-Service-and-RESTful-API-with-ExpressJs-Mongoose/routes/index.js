const express = require("express")
const InstructorRouter = require("./instructor")
const ParticipantRouter = require("./participant")

const router = express.Router()

router.get("/", (req, res) => {
  res.send({
    message: "Welcome to back-end"
  })
})

router.use("/instructor", InstructorRouter)
router.use("/participant", ParticipantRouter)

module.exports = router