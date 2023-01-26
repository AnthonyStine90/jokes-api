const express = require("express");
const jokeRouter = express.Router();

const {
  create,
  allJokes,
  oneJoke,
  updateJoke,
  deleteJoke,
} = require("../controllers/joke.controller");
// dont forget to go up a level

jokeRouter
  .route('/')
  .get(allJokes)
  .post(create)
  // restful routing. two above calls have the same route

jokeRouter
  .route('/:id')
  .get(oneJoke)
  .put(updateJoke)
  .delete(deleteJoke)

  module.exports = jokeRouter

  // COMPARISON BETWEEN PLATFORM AND CISO WAY

  // module.exports = (app) => {
  //   app.get("/api/users", UserController.findAllUsers);
  //   app.get("/api/users/:id", UserController.findOneSingleUser);
  //   app.put("/api/users/:id", UserController.updateExistingUser);
  //   app.post("/api/users", UserController.createNewUser);
  //   app.delete("/api/users/:id", UserController.deleteAnExistingUser);
  // };