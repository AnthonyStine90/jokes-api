const mongoose = require("mongoose");

const jokeSchema = mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Please enter setup"],
      minLength: [10, "Setup must be at least 10 characters"],
    },
    punchline: {
      type: String,
      required: [true, "Please enter punchline"],
      minLength: [3, "Punchline must be at least 3 characters"],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", jokeSchema);
module.exports = Joke;