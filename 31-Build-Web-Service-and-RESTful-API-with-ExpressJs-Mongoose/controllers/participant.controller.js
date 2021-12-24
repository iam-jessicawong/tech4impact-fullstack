const ParticipantModel = require("../models/participant.model")

const getAll = async (req, res) => {
  try {
    const participants = await ParticipantModel.find()

    res.send(participants)
  } catch (error) {
    res.status(500).send({"error": error})
  }
}

const getByID = async (req, res) => {
  const {id} = req.params
  
  try {
    const participant = await ParticipantModel.findOne({_id: id})
    
    res.send(participant)
  } catch (error) {
    res.status(500).send({"error": error})
  }
}

module.exports = {
  getAll
}