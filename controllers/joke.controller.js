const Joke = require("../models/jokes.model");

const create = (req, res) => {
  Joke.create(req.body)
    .then((joke) => res.status(201).json(joke))
    .catch((err) => res.status(400).json(err));
  //compared to platform: res.json doesnt need {}, that's what json does!
};

const allJokes = (req, res) => {
  Joke.find()
    .then((jokes) => res.status(200).json(jokes))
    .catch((err) => res.status(400).json(err));
};

const oneJoke = (req, res) => {
  const { id } = req.params;
  Joke.findById(id)
    .then((joke) => res.status(200).json(joke))
    .catch((err) => res.status(400).json(err));
};

const updateJoke = (req, res) => {
  const { id } = req.params;
  Joke.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((joke) => res.status(200).json(joke))
    .catch((err) => res.status(400).json(err));
};

const deleteJoke = (req, res) => {
  const { id } = req.params;
  Joke.findByIdAndDelete(id)
    .then((joke) => res.status(200).json(joke))
    .catch((err) => res.status(400).json(err));
};

module.exports = { create, allJokes, oneJoke, updateJoke, deleteJoke };
