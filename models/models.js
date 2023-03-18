const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  todo: { type: String, required: [true, "Please enter title"] },
  isComplete: { type: Boolean, required: [true, "Please enter title"] },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;