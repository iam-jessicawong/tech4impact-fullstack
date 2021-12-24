const mongoose = require("mongoose")

const opts = {
  versionKey: false
}

const CourseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 500
  },
  instructor: [{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Instructor"
  }],
  scheduleDateTime: {
    type: Date,
    required: true
  }
}, opts)

const CourseModel = mongoose.model("Course", CourseSchema)
module.exports = CourseModel