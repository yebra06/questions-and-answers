const express = require('express');
const mongoose = require('mongoose');
const { Question } = require('./models');
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/questions', {useNewUrlParser: true})
    .then(() => console.log('connection to db successful'))
    .catch((err) => console.log(err));

const createErr = (err) => {
  return { ok: false, message: err.message };
}

const findAllQuestions = async (req, res) => {
  try {
    res.status(200).json({ ok: true, questions: await Question.find() });
  } catch (err) {
    res.status(400).json(createErr(err));
  }
};

const createQuestion = async (req, res) => {
  try {
    res.status(200).json({ ok: true, question: await Question.create(req.body) });
  } catch (err) {
    res.status(400).json(createErr(err));
  }
};

router.route('/questions').get(findAllQuestions).post(createQuestion);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(3019, () => console.log(`Listening on port:${3019}`));
