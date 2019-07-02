const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
  },
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
});

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'A question is required to create question.']
  },
  answers: [AnswerSchema]
});

const Question = mongoose.model('Question', QuestionSchema);
const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = { Question, Answer };
