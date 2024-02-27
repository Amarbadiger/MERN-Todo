const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://amarbadiger:C2jrykPzYiQE6Gh0@cluster0.fh5tewx.mongodb.net/Todo-App"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
