const mongoose = require("mongoose");
// async function run() {
//   await mongoose.connect("mongodb://localhost:27017/todolist", (err) => {
//     if (err) console.log(err);
//     console.log("mongodb connection success");
//   });
// }

module.exports = mongoose
  .connect("mongodb://0.0.0.0:27017/todolist")
  .then(() => console.log("mongodb connection success"));
