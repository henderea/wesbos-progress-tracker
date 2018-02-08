const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const sectionSchema = new mongoose.Schema({
  course: {
    type: String,
    trim: true,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Section', sectionSchema);