const { model , Schema } = require('mongoose')

const EnrollSchema = new Schema({
    course: {type: Schema.ObjectId, ref: 'Course'},
    updated: Date,
    enrolled: {
      type: Date,
      default: Date.now
    },
    student: {type: Schema.ObjectId, ref: 'User'},
    lessonStatus: [{
        lesson: {type: Schema.ObjectId, ref: 'Lesson'}, 
        complete: Boolean}],
    completed: Date
  })



module.exports = model('Enroll', EnrollSchema)