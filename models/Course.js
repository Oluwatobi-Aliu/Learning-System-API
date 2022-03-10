const { model , Schema } = require('mongoose')

const LessonSchema = new Schema({
    title: String,
    content: String,
    resource_url: String
  })
  const LessonModel = model('Lesson', LessonSchema)

  const CourseSchema = Schema({
    name: {
      type: String,
      trim: true,
      required: 'Name is required'
    },
    description: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      required: 'Category is required'
    },
    updated: Date,
    created: {
      type: Date,
      default: Date.now
    },
    instructor: {type: Schema.ObjectId, ref: 'User'},
    published: {
      type: Boolean,
      default: false
    },
    lessons: [LessonSchema]
  })



module.exports = model('Course', CourseSchema)