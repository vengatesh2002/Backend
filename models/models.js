const mongoose = require('mongoose')

// const TaskSchema = new mongoose.Schema({
//     todo: String,
//     isComplete:Boolean
// })

// const Task = mongoose.model('task',TaskSchema)

// module.exports = Task;

// const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  todo: { type: String, required: [true, "Please enter title"] },
  isComplete: { type: Boolean, required: [true, "Please enter title"] },
});

module.exports = mongoose.model("Task", TaskSchema);