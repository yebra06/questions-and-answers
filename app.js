const express = require('express');
const mongoose = require('mongoose');
const { Question } = require('./models');
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/questions', { useNewUrlParser: true, useFindAndModify: false })
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

const getQuestionById = async (req, res) => {
  const { id } = req.params;

  try {
    let question = await Question.findById(id);

    res.status(200).json({ ok: true, question });
  } catch (err) {
    res.status(400).json(createErr(err));
  }
}

const createQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);

    res.status(200).json({ ok: true, question });
  } catch (err) {
    res.status(400).json(createErr(err));
  }
};

const updateQuestion = async (req, res) => {
  try {
    await Question.findOneAndUpdate({ _id: req.params.id }, req.body.question);

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(400).json(createErr(err));
  }
}

router.route('/questions').get(findAllQuestions).post(createQuestion);
router.route('/questions/:id').get(getQuestionById).put(updateQuestion);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.listen(3019, () => console.log(`Listening on port:${3019}`));
