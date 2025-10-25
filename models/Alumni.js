const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  talk: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Alumni', 'Fresher'],
    required: true
  },
  branch: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Alumni', alumniSchema);
