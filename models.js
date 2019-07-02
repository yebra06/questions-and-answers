const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'A question is required to create question.']
  },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = { Question };
